interface RoutePathData {
    method?: string;
    path: StringOrRegExp;
    controller?: string;
    middleware?: string | string[];
    as?: string;
    children?: RoutePathData[];
    useActionsAsName?: boolean;
}
declare type StringOrRegExp = String | RegExp;
declare class XpresserPath {
    data: RoutePathData;
    namespace: string;
    /**
     * @param {string} method
     * @param {string} path
     * @param {string} routes
     * @param {string} [namespace]
     * @returns {XpresserPath}
     */
    constructor(method: string, path: StringOrRegExp, routes: any, namespace?: string);
    /**
     * Set group prefix name of this route.
     * @param {string} as
     * @returns {XpresserPath}
     */
    as(as: string): this;
    /**
     * Set Controller of this route
     * @param {string} controller
     * @param {boolean} [actionsAsName=false]
     * @returns {XpresserPath}
     */
    controller(controller: string, actionsAsName?: boolean): this;
    /**
     * Add middleware for all routes in path
     * @param {string} middleware
     */
    middleware(middleware: string | string[]): this;
    /**
     * Add middleware's to all routes
     * @param middlewares
     */
    middlewares(middlewares: string[]): this;
    /**
     * Sets names of every route in group as their method name
     * @returns {XpresserPath}
     */
    actionsAsName(): this;
}
export = XpresserPath;
