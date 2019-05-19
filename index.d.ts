import XpresserRoute = require("./src/XpresserRoute");

declare class XpresserRouter {
    public routes;

    /**
     * Set path or grouped routes
     * @param path
     * @param routes
     */
    path(path: String, routes: Function): XpresserRoute;

    /**
     * Match Any Request Method
     * @param path
     * @param action
     */
    all(path: String, action?: String): XpresserRoute;


    /**
     * Router Delete
     * @param path
     * @param action
     */
    delete(path, action?: String): XpresserRoute;

    /**
     * Router Get
     * @param path
     * @param action
     */
    get(path: String, action?: String): XpresserRoute;


    /**
     * Router Post
     * @param path
     * @param action
     */
    post(path: String, action?: String): XpresserRoute;

    /**
     * Router Put
     * @param path
     * @param action
     */
    put(path: String, action?: String): XpresserRoute;

    /**
     * Push Route To AllRoutes
     * @param method
     * @param path
     * @param action
     */
    private addRoute(method: String, path: String, action: String): XpresserRoute;
}

export = XpresserRouter;