import XpresserRoute from "./src/XpresserRoute";
import clone from "lodash.clone";


class XpresserRouter {
    public namespace: string = "";
    public routes: XpresserRoute[] = [];

    constructor(namespace = undefined) {
        if (namespace !== undefined) {
            this.namespace = namespace;
        }
    }

    /**
     * Set path or grouped routes
     * @param {string} path
     * @param {function} routes
     *
     * @method
     *
     *
     * @returns {XpresserRoute}
     */
    path(path: string, routes: (router?: this) => void): XpresserRoute {
        let oldRoutes = clone(this.routes);

        this.routes = [];

        routes(this);

        let thisRoutes = clone(this.routes);

        this.routes = oldRoutes;


        const eachRoute = new XpresserRoute("children", path, thisRoutes, this.namespace);

        this.routes.push(eachRoute);


        return eachRoute;
    }

    /**
     * XpresserRouter All
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     *
     *
     * @returns {XpresserRoute}
     */
    all(path: string, action?: string) {
        return this.addRoute("all", path, action);
    }

    /**
     * XpresserRouter Delete
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     *
     *
     * @returns {XpresserRoute}
     */
    delete(path: string, action?: string) {
        return this.addRoute("delete", path, action);
    }

    /**
     * XpresserRouter Get
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     *
     *
     * @returns {XpresserRoute}
     */
    get(path: string, action?: string) {
        return this.addRoute("get", path, action);
    }

    /**
     * XpresserRouter Post
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     *
     *
     * @returns {XpresserRoute}
     */
    post(path: string, action?: string) {
        return this.addRoute("post", path, action);
    }

    /**
     * XpresserRouter Put
     * @param {string} path
     * @param {string} [action]
     *
     * @method
     *
     *
     * @returns {XpresserRoute}
     */
    put(path: string, action?: string) {
        return this.addRoute("put", path, action);
    }

    /**
     * Push Route To AllRoutes
     * @param method
     * @param path
     * @param action
     *
     * @private
     *
     * @return {XpresserRoute}
     */
    addRoute(method: string, path: string, action?: string) {

        if (typeof action === "function") {
            throw Error(`Action for ${path} cannot be a function use a string representing  a controller instead`)
        }

        if (action === undefined) {

            if (path.substr(0, 1) === "=") {

                action = path.substr(1);
                path = "";

            } else if (path.substr(0, 1) === "@") {

                path = path.substr(1);
                action = path;
            }

        }

        let eachRoute = new XpresserRoute(method, path, action, this.namespace);
        this.routes.push(eachRoute);

        return eachRoute;
    }
}

export = XpresserRouter;
