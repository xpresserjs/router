"use strict";
var XpresserRoute = /** @class */ (function () {
    /**
     * @param {string} method
     * @param {string} path
     * @param {string} controller
     * @param {string} [namespace]
     * @returns {XpresserRoute}
     */
    function XpresserRoute(method, path, controller, namespace) {
        if (namespace === void 0) { namespace = ''; }
        this.namespace = "";
        this.data = {
            method: method,
            path: path,
            controller: controller
        };
        this.namespace = namespace;
        return this;
    }
    /**
     * Set name this of route.
     * @param {string} name
     * @returns {XpresserRoute}
     */
    XpresserRoute.prototype.name = function (name) {
        this.data['name'] = name;
        return this;
    };
    /**
     * Set Controller of this route
     * @param {string} controller
     * @returns {XpresserRoute}
     */
    XpresserRoute.prototype.controller = function (controller) {
        if (this.namespace.length) {
            this.data['controller'] = this.namespace + '::' + controller;
        }
        else {
            this.data['controller'] = controller;
        }
        return this;
    };
    /**
     * Set name of this route using method name
     * @returns {XpresserRoute}
     */
    XpresserRoute.prototype.actionAsName = function () {
        var controller = this.data.controller;
        if (!controller)
            throw new Error('Method: ' + controller + ' not found!');
        var name = '';
        if (controller.indexOf("@") >= 0) {
            name = controller.split('@')[1];
        }
        else {
            name = controller;
        }
        this.name(name);
        return this;
    };
    return XpresserRoute;
}());
module.exports = XpresserRoute;
