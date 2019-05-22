declare class XpresserRoute {
  public data: object;
  public namespace: string;

  /**
   * @param method
   * @param path
   * @param controller
   */
  constructor(
    method: string,
    path: string,
    controller: string,
    namespace?: string
  );

  /**
   * Set name this of route.
   * @param  name
   */
  name(name: string): this;

  /**
   * Set group prefix name of this route.
   * @param as
   */
  as(as: string): this;

  /**
   * Set Controller of this route
   * @param controller
   * @param [actionsAsName=false]
   */
  controller(controller: string, actionsAsName?: Boolean): this;

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
