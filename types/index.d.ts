import XpresserRoute = require("./src/XpresserRoute");
import XpresserPath = require("./src/XpresserPath");
declare type RequestHandler = (xpresser?: any) => any;
declare type StringOrFunction = RequestHandler | string;
declare type StringOrRegExp = String | RegExp;
declare type RouteArray = [StringOrRegExp, (string | boolean)?, (string | boolean)?];
declare type ManyRoutes = string[] | RouteArray[] | (string | RouteArray)[];
declare class XpresserRouter {
    namespace: string;
    routes: (XpresserRoute | XpresserPath)[];
    constructor(namespace?: string);
    /**
     * Set path or grouped routes
     * @param {string} path
     * @param {function} routes
     * @returns {XpresserPath}
     */
    path(path: StringOrRegExp, routes?: (router: this) => void): XpresserPath;
    /**
     * XpresserRouter All
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    all(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Any
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    any(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Delete
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    delete(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * Delete Many Routes
     * @param {ManyRoutes} routes
     */
    deleteMany(routes: ManyRoutes): void;
    /**
     * XpresserRouter Get
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    get(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * Get Many Routes
     * @param {ManyRoutes} routes
     */
    getMany(routes: ManyRoutes): void;
    /**
     * XpresserRouter Checkout
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    checkout(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Copy
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    copy(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Head
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    head(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Lock
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    lock(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Merge
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    merge(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Mkactivity
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    mkactivity(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Mkcol
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    mkcol(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Move
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    move(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter M-Search
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    mSearch(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Notify
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    notify(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Options
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    options(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Patch
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    patch(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * Patch Many Routes
     * @param {ManyRoutes} routes
     */
    patchMany(routes: ManyRoutes): void;
    /**
     * XpresserRouter Purge
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    purge(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Post
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    post(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * Post Many Routes
     * @param {ManyRoutes} routes
     */
    postMany(routes: ManyRoutes): void;
    /**
     * XpresserRouter Report
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    report(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Put
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    put(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * Put Many Routes
     * @param {ManyRoutes} routes
     */
    putMany(routes: ManyRoutes): void;
    /**
     * XpresserRouter Search
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    search(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Subscribe
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    subscribe(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Trace
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    trace(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Unlock
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    unlock(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * XpresserRouter Get
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    unsubscribe(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    /**
     * Push Route To AllRoutes
     * @param method
     * @param path
     * @param action
     * @private
     * @return {XpresserRoute}
     */
    addRoute(method: string, path: StringOrRegExp, action?: StringOrFunction): XpresserRoute;
    addManyRoutes(method: string, routes: ManyRoutes): void;
    routesAfterPlugins(): void;
}
export = XpresserRouter;
