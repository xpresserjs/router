interface RouteData {
    method?: string,
    name?: string,
    path: StringOrRegExp,
    controller?: string,
    as?: string,
    children?: RouteData[],
    useMethodAsName?: boolean
}

type StringOrRegExp = String | RegExp;



class XpresserRoute {

    public data: RouteData;
    public namespace: string = "";

    /**
     * @param {string} method
     * @param {string} path
     * @param {string} controller
     * @param {string} [namespace]
     * @returns {XpresserRoute}
     */
    constructor(method: string, path: StringOrRegExp, controller: any, namespace: string = '') {

        if (method === 'children') {
            this.data = {
                path,
                children: <RouteData[]>controller
            }
        } else {
            this.data = {
                method,
                path,
                controller: <string>controller
            }
        }

        this.namespace = namespace;

        return this;
    }

    /**
     * Set name this of route.
     * @param {string} name
     * @returns {XpresserRoute}
     */
    name(name: string): this {
        this.data['name'] = name;
        return this;
    }

    /**
     * Set group prefix name of this route.
     * @param {string} as
     * @returns {XpresserRoute}
     */
    as(as: string): this {
        this.data['as'] = as;
        return this;
    }

    /**
     * Set Controller of this route
     * @param {string} controller
     * @param {boolean} [actionsAsName=false]
     * @returns {XpresserRoute}
     */
    controller(controller: string, actionsAsName: boolean = false): this {

        if (this.namespace.length) {
            this.data['controller'] = this.namespace + '::' + controller;
        } else {
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
    actionAsName(): this {
        if (typeof this.data.children !== 'undefined')
            throw new Error(`actionAsName cannot be used on Route, use actionsAsName instead, difference is action is plural.`);

        const controller = this.data.controller;

        if (!controller)
            throw new Error('Method: ' + controller + ' not found!');

        let name = '';
        if (controller.indexOf("@") >= 0) {
            name = controller.split('@')[1];
        } else {
            name = controller;
        }

        this.name(name);

        return this;
    }

    /**
     * Sets names of every route in group as their method name
     * @returns {XpresserRoute}
     */
    actionsAsName(): this {
        this.data['useMethodAsName'] = true;
        return this;
    }
}

export = XpresserRoute;
