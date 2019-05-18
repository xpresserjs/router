const clone = require('lodash.clone');
const Route = require('./Route');

/**
 * XpresserRouter
 */
class XpresserRouter {
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
     * Express XpresserRouter All
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     *
     *
     * @returns {Route}
     */
    all(path, action) {
        return this.addRoute('all', path, action);
    }

    /**
     * Express XpresserRouter Delete
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     *
     *
     * @returns {Route}
     */
    delete(path, action) {
        return this.addRoute('delete', path, action);
    }

    /**
     * Express XpresserRouter Get
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     *
     *
     * @returns {Route}
     */
    get(path, action) {
        return this.addRoute('get', path, action);
    }

    /**
     * Express XpresserRouter Post
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     *
     *
     * @returns {Route}
     */
    post(path, action) {
        return this.addRoute('post', path, action);
    }

    /**
     * Express XpresserRouter Put
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     *
     *
     * @returns {Route}
     */
    put(path, action) {
        return this.addRoute('put', path, action);
    }

    /**
     * Push Route To AllRoutes
     * @param method
     * @param path
     * @param action
     *
     * @return {Route}
     */
    addRoute(method, path, action) {
        if (action === undefined && path.substr(0, 1) === '@') {
            path = path.substr(1);
            action = path;
        }

        let eachRoute = new Route(method, path, action);
        this.routes.push(eachRoute);

        return eachRoute;
    }
}

XpresserRouter.prototype.routes = [];


module.exports = XpresserRouter;