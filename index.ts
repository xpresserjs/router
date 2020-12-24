import fs = require("fs");
import path = require("path");

import clone = require("lodash.clone");
import snakeCase = require("lodash.snakecase");

import XpresserRoute = require("./src/XpresserRoute");
import XpresserPath = require("./src/XpresserPath");

type RequestHandler = (xpresser?: any) => any;
type StringOrFunction = RequestHandler | string;
type StringOrRegExp = String | RegExp;
type RouteArray = [StringOrRegExp, (string | boolean)?, (string | boolean)?];
type ManyRoutes = string[] | RouteArray[] | (string | RouteArray)[];

class XpresserRouter {
    public namespace: string = "";
    public routes: (XpresserRoute | XpresserPath)[] = [];
    private readonly xpresserInstanceGetter: (() => any) | undefined;

    constructor(namespace?: string, xpresserInstanceGetter?: () => any) {
        if (namespace !== undefined) {
            this.namespace = namespace;
        }

        if (xpresserInstanceGetter) {
            this.xpresserInstanceGetter = xpresserInstanceGetter;
        }
    }

    /**
     * Set path or grouped routes
     * @param {string} path
     * @param {function} routes
     * @returns {XpresserPath}
     */
    public path(path: StringOrRegExp, routes?: (router: this) => void): XpresserPath {
        let thisRoutes = undefined;

        if (typeof routes === "function") {
            let oldRoutes = clone(this.routes);

            this.routes = [];

            routes(this);

            thisRoutes = clone(this.routes);

            this.routes = oldRoutes;
        }

        const eachRoute = new XpresserPath("children", path, thisRoutes, this.namespace);
        this.routes.push(eachRoute);


        return eachRoute;
    }

    /**
     * XpresserRouter All
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    public all(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("all", path, action);
    }

    /**
     * XpresserRouter Any
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    public any(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("all", path, action);
    }

    /**
     * XpresserRouter Delete
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    public delete(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("delete", path, action);
    }

    /**
     * Delete Many Routes
     * @param {ManyRoutes} routes
     */
    public deleteMany(routes: ManyRoutes): void {
        this.addManyRoutes("delete", routes)
    }

    /**
     * XpresserRouter Get
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public get(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("get", path, action);
    }


    /**
     * Send file as response
     * @param url
     * @param file
     * @param interceptor
     *
     * @example
     * router.sendFile('/', 'about.html');
     */
    public sendFile<Http = any>(url: string, file: string, interceptor?: (http: Http) => Http) {
        const xpr = this.xpresserInstanceGetter ? this.xpresserInstanceGetter() : null;

        if (!xpr) throw new Error("An Xpresser instance getter is required to use `router.sendFile`");

        file = xpr.path.resolve(file, true);
        let hasFile = fs.existsSync(file);

        if (!hasFile) {
            file = xpr.path.base(file);
            hasFile = fs.existsSync(file);
        }

        const error = hasFile ? null : new Error();

        const handler = (http: Http) => {

            if (!hasFile) return (http as any).newError().view({
                error: {
                    title: 'File not found!',
                    message: `Router could not find file "${file}"`,
                    log: error?.stack
                }
            }, 404)

            http = interceptor ? interceptor(http) : http;
            return (http as any).res.sendFile(file);
        };

        try {
            Object.defineProperty(handler, 'name', {
                value: `getFile(${file})`,
                enumerable: false,
                writable: true
            })
        } catch (_err) {
        }

        return this.get(url, handler);
    }

    /**
     * Get Many Routes
     * @param {ManyRoutes} routes
     */
    public getMany(routes: ManyRoutes): void {
        this.addManyRoutes("get", routes)
    }

    /**
     * XpresserRouter Checkout
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public checkout(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("checkout", path, action);
    }

    /**
     * XpresserRouter Copy
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public copy(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("copy", path, action);
    }

    /**
     * XpresserRouter Head
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public head(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("head", path, action);
    }

    /**
     * XpresserRouter Lock
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public lock(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("lock", path, action);
    }

    /**
     * XpresserRouter Merge
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public merge(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("merge", path, action);
    }

    /**
     * XpresserRouter Mkactivity
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public mkactivity(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("mkactivity", path, action);
    }

    /**
     * XpresserRouter Mkcol
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public mkcol(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("mkcol", path, action);
    }

    /**
     * XpresserRouter Move
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public move(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("move", path, action);
    }

    /**
     * XpresserRouter M-Search
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public mSearch(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("m-search", path, action);
    }

    /**
     * XpresserRouter Notify
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public notify(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("notify", path, action);
    }

    /**
     * XpresserRouter Options
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public options(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("options", path, action);
    }

    /**
     * XpresserRouter Patch
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public patch(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("patch", path, action);
    }

    /**
     * Patch Many Routes
     * @param {ManyRoutes} routes
     */
    public patchMany(routes: ManyRoutes): void {
        this.addManyRoutes("patch", routes)
    }

    /**
     * XpresserRouter Purge
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public purge(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("purge", path, action);
    }

    /**
     * XpresserRouter Post
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    public post(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("post", path, action);
    }

    /**
     * Post Many Routes
     * @param {ManyRoutes} routes
     */
    public postMany(routes: ManyRoutes): void {
        this.addManyRoutes("post", routes)
    }

    /**
     * XpresserRouter Report
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public report(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("report", path, action);
    }

    /**
     * XpresserRouter Put
     * @param {string} path
     * @param {string} [action]
     * @returns {XpresserRoute}
     */
    public put(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("put", path, action);
    }

    /**
     * Put Many Routes
     * @param {ManyRoutes} routes
     */
    public putMany(routes: ManyRoutes): void {
        this.addManyRoutes("put", routes)
    }

    /**
     * XpresserRouter Search
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public search(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("search", path, action);
    }

    /**
     * XpresserRouter Subscribe
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public subscribe(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("subscribe", path, action);
    }

    /**
     * XpresserRouter Trace
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public trace(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("trace", path, action);
    }

    /**
     * XpresserRouter Unlock
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public unlock(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("unlock", path, action);
    }

    /**
     * XpresserRouter Get
     * @param {string} path
     * @param {StringOrFunction} [action]
     * @returns {XpresserRoute}
     */
    public unsubscribe(path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {
        return this.addRoute("unsubscribe", path, action);
    }

    /**
     * Push Route To AllRoutes
     * @param method
     * @param path
     * @param action
     * @private
     * @return {XpresserRoute}
     */
    public addRoute(method: string, path: StringOrRegExp, action?: StringOrFunction): XpresserRoute {

        if (typeof path === "string" && action === undefined) {

            if (path.substr(0, 1) === "=") {

                action = path.substr(1);
                path = "";


            } else if (path.substr(0, 1) === "@") {

                path = path.substr(1);
                action = <string>path;
                path = snakeCase(path as string);
            }

        }

        /**
         * if instance has namespace, action is string and action includes `@` but not `::`
         * We append namespace to action
         *
         * We exclude actions including `::`
         * because a namespace may want to point to another namespace controller methods
         */
        if (this.namespace && typeof action === "string" && action.includes('@') && !action.includes('::')) {
            action = this.namespace + '::' + action
        }

        let eachRoute = new XpresserRoute(method, path, action, this.namespace);
        this.routes.push(eachRoute);

        return eachRoute;
    }

    public addManyRoutes(method: string, routes: ManyRoutes): void {
        for (const route of routes) {
            if (typeof route === 'string') {
                this.addRoute(method, route)
            } else if (Array.isArray(route)) {
                let [path, action, name]: RouteArray = route

                // if shortHand validate true as second param.
                const firstChar = (path as string).substr(0, 1);
                if (firstChar === '@' || firstChar === '=') {
                    if (action && name === undefined) {
                        name = action;
                        action = undefined;
                    }
                }

                let thisRoute = this.addRoute(method, path, action as any);
                // Add name if has name
                if (name) name === true ? thisRoute.actionAsName() : thisRoute.name(name as string);
            }
        }
    }

    public routesAfterPlugins(): void {
    }

    /**
     * Set routes connected to on controller.
     *
     * Works only in paths
     * @param controller
     * @param routes
     */
    public useController(controller: string, routes: (router: this) => void): XpresserPath {
        return this.path("", routes).controller(controller);
    }
}

export = XpresserRouter;
