import XpresserRoute = require("./src/XpresserRoute");
import clone = require("lodash.clone");


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
    public path(path: string, routes: (router?: this) => void): XpresserRoute {
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
    public all(path: string, action?: string) {
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
    public delete(path: string, action?: string) {
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
    public get(path: string, action?: string) {
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
    public post(path: string, action?: string) {
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
    public put(path: string, action?: string) {
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
    public addRoute(method: string, path: string, action?: string) {

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

    public routesAfterPlugins(): void {};
}

export = XpresserRouter;
