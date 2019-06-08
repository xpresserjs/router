"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const XpresserRoute_1 = __importDefault(require("./src/XpresserRoute"));
const lodash_clone_1 = __importDefault(require("lodash.clone"));
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
     *
     * @method
     *
     *
     * @returns {XpresserRoute}
     */
    path(path, routes) {
        let oldRoutes = lodash_clone_1.default(this.routes);
        this.routes = [];
        routes(this);
        let thisRoutes = lodash_clone_1.default(this.routes);
        this.routes = oldRoutes;
        const eachRoute = new XpresserRoute_1.default("children", path, thisRoutes, this.namespace);
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
    all(path, action) {
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
    delete(path, action) {
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
    get(path, action) {
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
    post(path, action) {
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
    put(path, action) {
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
    addRoute(method, path, action) {
        if (typeof action === "function") {
            throw Error(`Action for ${path} cannot be a function use a string representing  a controller instead`);
        }
        if (action === undefined) {
            if (path.substr(0, 1) === "=") {
                action = path.substr(1);
                path = "";
            }
            else if (path.substr(0, 1) === "@") {
                path = path.substr(1);
                action = path;
            }
        }
        let eachRoute = new XpresserRoute_1.default(method, path, action, this.namespace);
        this.routes.push(eachRoute);
        return eachRoute;
    }
}
module.exports = XpresserRouter;
//# sourceMappingURL=index.js.map