interface RouteData {
    method?: string;
    name?: string;
    path: StringOrRegExp;
    controller?: string;
}
declare type StringOrRegExp = String | RegExp;
declare class XpresserRoute {
    data: RouteData;
    namespace: string;
    /**
     * Constructor
     * @param {string} method
     * @param {string} path
     * @param {string} controller
     * @param {string} [namespace]
     * @returns {XpresserRoute}
     */
    constructor(method: string, path: StringOrRegExp, controller: any, namespace?: string);
    /**
     * Set name this of route.
     * @param {string} name
     * @returns {XpresserRoute}
     */
    name(name: string): this;
    /**
     * Set Controller of this route
     * @param {string} controller
     * @returns {XpresserRoute}
     */
    controller(controller: string): this;
    /**
     * Set name of this route using method name
     * @returns {XpresserRoute}
     */
    actionAsName(): this;
}
export = XpresserRoute;
