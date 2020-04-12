interface RoutePathData {
    method?: string,
    path: StringOrRegExp,
    controller?: string,
    middleware?: string | string[],
    as?: string,
    children?: RoutePathData[],
    useActionsAsName?: boolean
}

type StringOrRegExp = String | RegExp;

class XpresserPath {

    public data: RoutePathData;
    public namespace: string = "";

    /**
     * @param {string} method
     * @param {string} path
     * @param {string} routes
     * @param {string} [namespace]
     * @returns {XpresserPath}
     */
    constructor(method: string, path: StringOrRegExp, routes: any, namespace: string = '') {


        this.data = {
            path,
        };

        if (routes) {
            this.data.children = <RoutePathData[]>routes;
        } else {
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
    as(as: string): this {
        this.data['as'] = as;
        return this;
    }

    /**
     * Set Controller of this route
     * @param {string} controller
     * @param {boolean} [actionsAsName=false]
     * @returns {XpresserPath}
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
     * Add middleware for all routes in path
     * @param {string} middleware
     */
    middleware(middleware: string | string[]): this {
        this.data['middleware'] = middleware;
        return this
    }

    /**
     * Add middleware's to all routes
     * @param middlewares
     */
    middlewares(middlewares: string[]): this {
        return this.middleware(middlewares);
    }

    /**
     * Sets names of every route in group as their method name
     * @returns {XpresserPath}
     */
    actionsAsName(): this {
        this.data['useActionsAsName'] = true;
        return this;
    }
}

export = XpresserPath;