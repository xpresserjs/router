import XpresserRoute = require("./src/XpresserRoute");
import XpresserPath = require("./src/XpresserPath");

import clone = require("lodash.clone");
import snakeCase = require("lodash.snakecase");

type RequestHandler = (xpresser?: any) => any;
type StringOrFunction = RequestHandler | string;
type StringOrRegExp = String | RegExp;

class XpresserRouter {
    public namespace: string = "";
    public routes: (XpresserRoute | XpresserPath)[] = [];

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
     * @returns {XpresserPath}
     */
    public path(path: StringOrRegExp, routes?: (router?: this) => false): XpresserPath {
        let thisRoutes = undefined;

        if (typeof routes === "function") {
            let oldRoutes = clone(this.routes);

            this.routes = [];

            routes(this);

            thisRoutes = clone(this.routes);

            this.routes = oldRoutes;
        }

        const eachRoute = new XpresserPath("children", path, thisRoutes, this.namespace);
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
    public all(path: StringOrRegExp, action?: StringOrFunction) {
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
    public delete(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("delete", path, action);
    }

    /**
     * XpresserRouter Get
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public get(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("get", path, action);
    }

    /**
     * XpresserRouter Checkout
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public checkout(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("checkout", path, action);
    }

    /**
     * XpresserRouter Copy
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public copy(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("copy", path, action);
    }

    /**
     * XpresserRouter Head
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public head(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("head", path, action);
    }

    /**
     * XpresserRouter Lock
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public lock(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("lock", path, action);
    }

    /**
     * XpresserRouter Merge
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public merge(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("merge", path, action);
    }

    /**
     * XpresserRouter Mkactivity
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public mkactivity(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("mkactivity", path, action);
    }

    /**
     * XpresserRouter Mkcol
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public mkcol(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("mkcol", path, action);
    }

    /**
     * XpresserRouter Move
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public move(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("move", path, action);
    }

    /**
     * XpresserRouter M-Search
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public mSearch(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("m-search", path, action);
    }

    /**
     * XpresserRouter Notify
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public notify(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("notify", path, action);
    }

    /**
     * XpresserRouter Options
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public options(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("options", path, action);
    }

    /**
     * XpresserRouter Patch
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public patch(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("path", path, action);
    }

    /**
     * XpresserRouter Purge
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public purge(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("purge", path, action);
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
    public post(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("post", path, action);
    }

    /**
     * XpresserRouter Report
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public report(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("report", path, action);
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
    public put(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("put", path, action);
    }

    /**
     * XpresserRouter Search
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public search(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("search", path, action);
    }

    /**
     * XpresserRouter Subscribe
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public subscribe(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("subscribe", path, action);
    }

    /**
     * XpresserRouter Trace
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public trace(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("trace", path, action);
    }

    /**
     * XpresserRouter Unlock
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public unlock(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("unlock", path, action);
    }

    /**
     * XpresserRouter Get
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public unsubscribe(path: StringOrRegExp, action?: StringOrFunction) {
        return this.addRoute("unsubscribe", path, action);
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
    public addRoute(method: string, path: StringOrRegExp, action?: StringOrFunction) {

        /*if (typeof action === "function") {
            throw Error(`Action for ${path} cannot be a function use a string representing  a controller instead`)
        }*/


        if (typeof path === "string" && action === undefined) {


            if (path.substr(0, 1) === "=") {

                action = path.substr(1);
                path = "";


            } else if (path.substr(0, 1) === "@" || path.includes('@')) {

                path = path.substr(1);
                action = <string>path;
                path = snakeCase(path);
            }

        }

        let eachRoute = new XpresserRoute(method, path, action, this.namespace);
        this.routes.push(eachRoute);

        return eachRoute;
    }

    public routesAfterPlugins(): void {
    };
}

export = XpresserRouter;
