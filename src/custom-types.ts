export interface RouteData {
    method?: string,
        name?: string,
        path: StringOrRegExp,
        controller?: string
}

export interface RoutePathData {
    method?: string,
    path: StringOrRegExp,
    controller?: string,
    middleware?: string | string[],
    as?: string,
    children?: RoutePathData[],
    useActionsAsName?: boolean
}

export  type StringOrRegExp = String | RegExp;

export type RequestHandler = (xpresser?: any) => any;
export type StringOrFunction = RequestHandler | string;
export type RouteArray = [StringOrRegExp, (string | boolean)?, (string | boolean)?];
export type ManyRoutes = string[] | RouteArray[] | (string | RouteArray)[];