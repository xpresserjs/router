"use strict";
var clone = require("lodash.clone");
var snakeCase = require("lodash.snakecase");
var XpresserRoute = require("./src/XpresserRoute");
var XpresserPath = require("./src/XpresserPath");
var XpresserRouter = /** @class */ (function () {
    function XpresserRouter(namespace) {
        if (namespace === void 0) { namespace = undefined; }
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
     *
     * @method
     *
     *
     * @returns {XpresserPath}
     */
    XpresserRouter.prototype.path = function (path, routes) {
        var thisRoutes = undefined;
        if (typeof routes === "function") {
            var oldRoutes = clone(this.routes);
            this.routes = [];
            routes(this);
            thisRoutes = clone(this.routes);
            this.routes = oldRoutes;
        }
        var eachRoute = new XpresserPath("children", path, thisRoutes, this.namespace);
        this.routes.push(eachRoute);
        return eachRoute;
    };
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
    XpresserRouter.prototype.all = function (path, action) {
        return this.addRoute("all", path, action);
    };
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
    XpresserRouter.prototype["delete"] = function (path, action) {
        return this.addRoute("delete", path, action);
    };
    /**
     * XpresserRouter Get
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.get = function (path, action) {
        return this.addRoute("get", path, action);
    };
    /**
     * XpresserRouter Checkout
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.checkout = function (path, action) {
        return this.addRoute("checkout", path, action);
    };
    /**
     * XpresserRouter Copy
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.copy = function (path, action) {
        return this.addRoute("copy", path, action);
    };
    /**
     * XpresserRouter Head
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.head = function (path, action) {
        return this.addRoute("head", path, action);
    };
    /**
     * XpresserRouter Lock
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.lock = function (path, action) {
        return this.addRoute("lock", path, action);
    };
    /**
     * XpresserRouter Merge
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.merge = function (path, action) {
        return this.addRoute("merge", path, action);
    };
    /**
     * XpresserRouter Mkactivity
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.mkactivity = function (path, action) {
        return this.addRoute("mkactivity", path, action);
    };
    /**
     * XpresserRouter Mkcol
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.mkcol = function (path, action) {
        return this.addRoute("mkcol", path, action);
    };
    /**
     * XpresserRouter Move
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.move = function (path, action) {
        return this.addRoute("move", path, action);
    };
    /**
     * XpresserRouter M-Search
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.mSearch = function (path, action) {
        return this.addRoute("m-search", path, action);
    };
    /**
     * XpresserRouter Notify
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.notify = function (path, action) {
        return this.addRoute("notify", path, action);
    };
    /**
     * XpresserRouter Options
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.options = function (path, action) {
        return this.addRoute("options", path, action);
    };
    /**
     * XpresserRouter Patch
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.patch = function (path, action) {
        return this.addRoute("path", path, action);
    };
    /**
     * XpresserRouter Purge
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.purge = function (path, action) {
        return this.addRoute("purge", path, action);
    };
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
    XpresserRouter.prototype.post = function (path, action) {
        return this.addRoute("post", path, action);
    };
    /**
     * XpresserRouter Report
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.report = function (path, action) {
        return this.addRoute("report", path, action);
    };
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
    XpresserRouter.prototype.put = function (path, action) {
        return this.addRoute("put", path, action);
    };
    /**
     * XpresserRouter Search
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.search = function (path, action) {
        return this.addRoute("search", path, action);
    };
    /**
     * XpresserRouter Subscribe
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.subscribe = function (path, action) {
        return this.addRoute("subscribe", path, action);
    };
    /**
     * XpresserRouter Trace
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.trace = function (path, action) {
        return this.addRoute("trace", path, action);
    };
    /**
     * XpresserRouter Unlock
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.unlock = function (path, action) {
        return this.addRoute("unlock", path, action);
    };
    /**
     * XpresserRouter Get
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    XpresserRouter.prototype.unsubscribe = function (path, action) {
        return this.addRoute("unsubscribe", path, action);
    };
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
    XpresserRouter.prototype.addRoute = function (method, path, action) {
        /*if (typeof action === "function") {
            throw Error(`Action for ${path} cannot be a function use a string representing  a controller instead`)
        }*/
        if (typeof path === "string" && action === undefined) {
            path = path;
            if (path.substr(0, 1) === "=") {
                action = path.substr(1);
                path = "";
            }
            else if (path.substr(0, 1) === "@" || path.includes('@')) {
                path = path.substr(1);
                action = path;
                path = snakeCase(path);
            }
        }
        var eachRoute = new XpresserRoute(method, path, action, this.namespace);
        this.routes.push(eachRoute);
        return eachRoute;
    };
    XpresserRouter.prototype.routesAfterPlugins = function () { };
    return XpresserRouter;
}());
module.exports = XpresserRouter;
