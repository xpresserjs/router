"use strict";
class XpresserRoute {
    /**
     * Constructor
     * @param {string} method
     * @param {string} path
     * @param {string} controller
     * @param {string} [namespace]
     * @returns {XpresserRoute}
     */
    constructor(method, path, controller, namespace = '') {
        this.namespace = "";
        this.data = {
            method,
            path,
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
    name(name) {
        this.data['name'] = name;
        return this;
    }
    /**
     * Set Controller of this route
     * @param {string} controller
     * @returns {XpresserRoute}
     */
    controller(controller) {
        if (this.namespace.length) {
            this.data['controller'] = this.namespace + '::' + controller;
        }
        else {
            this.data['controller'] = controller;
        }
        return this;
    }
    /**
     * Set name of this route using method name
     * @returns {XpresserRoute}
     */
    actionAsName() {
        const controller = this.data.controller;
        if (!controller)
            throw new Error('Method: ' + controller + ' not found!');
        let name = '';
        if (controller.indexOf("@") >= 0) {
            name = controller.split('@')[1];
        }
        else {
            name = controller;
        }
        this.name(name);
        return this;
    }
}
module.exports = XpresserRoute;
