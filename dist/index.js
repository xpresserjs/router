"use strict";
const clone = require("lodash.clone");
const snakeCase = require("lodash.snakecase");
const XpresserRoute = require("./src/XpresserRoute");
const XpresserPath = require("./src/XpresserPath");
class XpresserRouter {
    constructor(namespace = undefined) {
        this.namespace = "";
        this.routes = [];
        if (namespace !== undefined) {
            this.namespace = namespace;
        }
    }
    /**
     * Set path or grouped routes
     * @param {string} path
     * @param {function} routes
     * @returns {XpresserPath}
     */
    path(path, routes) {
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
     * @returns {XpresserRoute}
     */
    all(path, action) {
        return this.addRoute("all", path, action);
    }
    getMany(routes) {
        this.addManyRoutes("get", routes);
    }
    /**
     * XpresserRouter Delete
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    delete(path, action) {
        return this.addRoute("delete", path, action);
    }
    /**
     * XpresserRouter Get
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    get(path, action) {
        return this.addRoute("get", path, action);
    }
    /**
     * XpresserRouter Checkout
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    checkout(path, action) {
        return this.addRoute("checkout", path, action);
    }
    /**
     * XpresserRouter Copy
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    copy(path, action) {
        return this.addRoute("copy", path, action);
    }
    /**
     * XpresserRouter Head
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    head(path, action) {
        return this.addRoute("head", path, action);
    }
    /**
     * XpresserRouter Lock
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    lock(path, action) {
        return this.addRoute("lock", path, action);
    }
    /**
     * XpresserRouter Merge
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    merge(path, action) {
        return this.addRoute("merge", path, action);
    }
    /**
     * XpresserRouter Mkactivity
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    mkactivity(path, action) {
        return this.addRoute("mkactivity", path, action);
    }
    /**
     * XpresserRouter Mkcol
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    mkcol(path, action) {
        return this.addRoute("mkcol", path, action);
    }
    /**
     * XpresserRouter Move
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    move(path, action) {
        return this.addRoute("move", path, action);
    }
    /**
     * XpresserRouter M-Search
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    mSearch(path, action) {
        return this.addRoute("m-search", path, action);
    }
    /**
     * XpresserRouter Notify
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    notify(path, action) {
        return this.addRoute("notify", path, action);
    }
    /**
     * XpresserRouter Options
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    options(path, action) {
        return this.addRoute("options", path, action);
    }
    /**
     * XpresserRouter Patch
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    patch(path, action) {
        return this.addRoute("patch", path, action);
    }
    /**
     * XpresserRouter Purge
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    purge(path, action) {
        return this.addRoute("purge", path, action);
    }
    /**
     * XpresserRouter Post
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    post(path, action) {
        return this.addRoute("post", path, action);
    }
    /**
     * XpresserRouter Report
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    report(path, action) {
        return this.addRoute("report", path, action);
    }
    /**
     * XpresserRouter Put
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    put(path, action) {
        return this.addRoute("put", path, action);
    }
    /**
     * XpresserRouter Search
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    search(path, action) {
        return this.addRoute("search", path, action);
    }
    /**
     * XpresserRouter Subscribe
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    subscribe(path, action) {
        return this.addRoute("subscribe", path, action);
    }
    /**
     * XpresserRouter Trace
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    trace(path, action) {
        return this.addRoute("trace", path, action);
    }
    /**
     * XpresserRouter Unlock
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    unlock(path, action) {
        return this.addRoute("unlock", path, action);
    }
    /**
     * XpresserRouter Get
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    unsubscribe(path, action) {
        return this.addRoute("unsubscribe", path, action);
    }
    /**
     * Push Route To AllRoutes
     * @param method
     * @param path
     * @param action
     * @private
     * @return {XpresserRoute}
     */
    addRoute(method, path, action) {
        if (typeof path === "string" && action === undefined) {
            if (path.substr(0, 1) === "=") {
                action = path.substr(1);
                path = "";
            }
            else if (path.substr(0, 1) === "@") {
                path = path.substr(1);
                action = path;
                path = snakeCase(path);
            }
        }
        /**
         * if instance has namespace, action is string and action includes `@` but not `::`
         * We append namespace to action
         *
         * We exclude actions including `::`
         * because a namespace may want to point to another namespace controller methods
         */
        if (this.namespace && typeof action === "string" && action.includes('@') && !action.includes('::')) {
            action = this.namespace + '::' + action;
        }
        let eachRoute = new XpresserRoute(method, path, action, this.namespace);
        this.routes.push(eachRoute);
        return eachRoute;
    }
    addManyRoutes(method, routes) {
        for (const route of routes) {
            if (typeof route === 'string') {
                this.addRoute(method, route);
            }
            else if (Array.isArray(route)) {
                let [path, action, name] = route;
                // oif shortHand validate true as second param.
                if (path[0] === '@' || path[0] === '=') {
                    if (action && name === undefined) {
                        name = action;
                        action = undefined;
                    }
                }
                let thisRoute = this.addRoute(method, path, action);
                // Add name if has name
                if (name)
                    name === true ? thisRoute.actionAsName() : thisRoute.name(name);
            }
        }
    }
    routesAfterPlugins() {
    }
}
module.exports = XpresserRouter;
