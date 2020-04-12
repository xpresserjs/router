"use strict";
class XpresserPath {
    /**
     * @param {string} method
     * @param {string} path
     * @param {string} routes
     * @param {string} [namespace]
     * @returns {XpresserPath}
     */
    constructor(method, path, routes, namespace = '') {
        this.namespace = "";
        this.data = {
            path,
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
    as(as) {
        this.data['as'] = as;
        return this;
    }
    /**
     * Set Controller of this route
     * @param {string} controller
     * @param {boolean} [actionsAsName=false]
     * @returns {XpresserPath}
     */
    controller(controller, actionsAsName = false) {
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
    }
    /**
     * Add middleware for all routes in path
     * @param {string} middleware
     */
    middleware(middleware) {
        this.data['middleware'] = middleware;
        return this;
    }
    /**
     * Add middleware's to all routes
     * @param middlewares
     */
    middlewares(middlewares) {
        return this.middleware(middlewares);
    }
    /**
     * Sets names of every route in group as their method name
     * @returns {XpresserPath}
     */
    actionsAsName() {
        this.data['useActionsAsName'] = true;
        return this;
    }
}
module.exports = XpresserPath;