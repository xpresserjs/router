const clone = require('lodash.clone');
const Route = require('./Route');

/**
 * Push Route To AllRoutes
 * @param {Router} $this
 * @param method
 * @param path
 * @param action
 * @function
 * @return {Route}
 */
function pushToRoute($this, method, path, action) {
    if (action === undefined && path.substr(0, 1) === '@') {
        path = path.substr(1);
        action = path;
    }

    let eachRoute = new Route(method, path, action);
    $this.routes.push(eachRoute);

    return eachRoute;
}

class Router {
    /**
     * Set path or grouped routes
     * @param {string} path
     * @param {function} routes
     *
     * @method
     * 
     *
     * @returns {Route}
     */
    path(path, routes) {
        let oldRoutes = clone(this.routes);

        this.routes = [];

        routes(this);
        let thisRoutes = clone(this.routes);

        this.routes = oldRoutes;

        if (thisRoutes.length) {

            let eachRoute = new Route('children', path, thisRoutes);

            this.routes.push(eachRoute);


            return eachRoute;
        }

    }

    /**
     * Express Router All
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     * 
     *
     * @returns {Route}
     */
    all(path, action) {
        return pushToRoute(this, 'all', path, action);
    }

    /**
     * Express Router Delete
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     * 
     *
     * @returns {Route}
     */
    delete(path, action) {
        return pushToRoute(this, 'delete', path, action);
    }

    /**
     * Express Router Get
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     * 
     *
     * @returns {Route}
     */
    get(path, action) {
        return pushToRoute(this, 'get', path, action);
    }

    /**
     * Express Router Post
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     * 
     *
     * @returns {Route}
     */
    post(path, action) {
        return pushToRoute(this, 'post', path, action);
    }

    /**
     * Express Router Put
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     * 
     *
     * @returns {Route}
     */
    put(path, action) {
        return pushToRoute(this, 'put', path, action);
    }
}

Router.prototype.routes = [];

/**
 * @type {Router}
 */
module.exports = Router;