declare class XpresserRoute {
    public data;

    /**
     * @param method
     * @param path
     * @param controller
     */
    constructor(method: String, path: String, controller: String);

    /**
     * Set name this of route.
     * @param  name
     */
    name(name: String): this;

    /**
     * Set group prefix name of this route.
     * @param as
     */
    as(as: String): this;

    /**
     * Set Controller of this route
     * @param controller
     * @param [actionsAsName=false]
     */
    controller(controller: String | Function, actionsAsName?: Boolean): this;

    /**
     * Set name of this route using method name
     */
    actionAsName(): this;

    /**
     * Sets names of every route in group as their method name
     */
    actionsAsName(): this;
}

export = XpresserRoute;
