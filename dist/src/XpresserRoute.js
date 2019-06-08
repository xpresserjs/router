"use strict";
class XpresserRoute {
    /**
     * @param {string} method
     * @param {string} path
     * @param {string} controller
     * @param {string} [namespace]
     * @returns {XpresserRoute}
     */
    constructor(method, path, controller, namespace = '') {
        this.namespace = "";
        if (method === 'children') {
            this.data = {
                path,
                children: controller
            };
        }
        else {
            this.data = {
                method,
                path,
                controller: controller
            };
        }
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
     * Set group prefix name of this route.
     * @param {string} as
     * @returns {XpresserRoute}
     */
    as(as) {
        this.data['as'] = as;
        return this;
    }
    /**
     * Set Controller of this route
     * @param {string} controller
     * @param {boolean} [actionsAsName=false]
     * @returns {XpresserRoute}
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
     * Set name of this route using method name
     * @returns {XpresserRoute}
     */
    actionAsName() {
        if (typeof this.data.children !== 'undefined')
            throw new Error(`actionAsName cannot be used on Route, use actionsAsName instead, difference is action is plural.`);
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
    /**
     * Sets names of every route in group as their method name
     * @returns {XpresserRoute}
     */
    actionsAsName() {
        this.data['useMethodAsName'] = true;
        return this;
    }
}
module.exports = XpresserRoute;
//# sourceMappingURL=XpresserRoute.js.map