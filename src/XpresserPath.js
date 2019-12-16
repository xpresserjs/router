"use strict";
var XpresserPath = /** @class */ (function () {
    /**
     * @param {string} method
     * @param {string} path
     * @param {string} routes
     * @param {string} [namespace]
     * @returns {XpresserPath}
     */
    function XpresserPath(method, path, routes, namespace) {
        if (namespace === void 0) { namespace = ''; }
        this.namespace = "";
        this.data = {
            path: path
        };
        if (routes) {
            this.data.children = routes;
        }
        else {
            this.data.children = [];
        }
        this.namespace = namespace;
        return this;
    }
    /**
     * Set group prefix name of this route.
     * @param {string} as
     * @returns {XpresserPath}
     */
    XpresserPath.prototype.as = function (as) {
        this.data['as'] = as;
        return this;
    };
    /**
     * Set Controller of this route
     * @param {string} controller
     * @param {boolean} [actionsAsName=false]
     * @returns {XpresserPath}
     */
    XpresserPath.prototype.controller = function (controller, actionsAsName) {
        if (actionsAsName === void 0) { actionsAsName = false; }
        if (this.namespace.length) {
            this.data['controller'] = this.namespace + '::' + controller;
        }
        else {
            this.data['controller'] = controller;
        }
        if (actionsAsName === true) {
            return this.actionsAsName();
        }
        return this;
    };
    /**
     * Add middleware for all routes in path
     * @param {string} middleware
     */
    XpresserPath.prototype.middleware = function (middleware) {
        this.data['middleware'] = middleware;
        return this;
    };
    /**
     * Add middleware's to all routes
     * @param middlewares
     */
    XpresserPath.prototype.middlewares = function (middlewares) {
        return this.middleware(middlewares);
    };
    /**
     * Sets names of every route in group as their method name
     * @returns {XpresserPath}
     */
    XpresserPath.prototype.actionsAsName = function () {
        this.data['useActionsAsName'] = true;
        return this;
    };
    return XpresserPath;
}());
module.exports = XpresserPath;
