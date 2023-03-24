type QueryParam = Record<string, undefined | string | string[]>;

interface AuthRequest {
    user?: any
}

interface RequestTypedQuery<T extends QueryParam = QueryParam> extends Express.Request<never, never, never, T>, AuthRequest {
    query: T;
}

interface RequestTypedParams<T extends Record = Record> extends Express.Request<T, never, never, never>, AuthRequest {
    params: T;
}

interface RequestTypedBody<T extends Record = Record> extends Express.Request<never, never, T, never>, AuthRequest {
    body: T;
} p

export type {
    QueryParam,
    RequestTypedBody,
    RequestTypedQuery,
    RequestTypedParams,
    AuthRequest
};

