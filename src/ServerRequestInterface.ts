import RequestInterface from './RequestInterface';

export type QueryParams = Map<string, QueryParams> | Array<QueryParams> | string;
export type ParsedBody = Map<string, ParsedBody> | Array<ParsedBody> | string | number | boolean | null;

interface ServerRequestInterface extends RequestInterface {
    getCookieParams(): Map<string, string>;
    withCookieParams(cookieParams: Map<string, string>): this;
    getQueryParams(): QueryParams;
    withQueryParams(queryParams: QueryParams): this;
    getParsedBody(): ParsedBody | undefined;
    withParsedBody(parsedBody: ParsedBody | undefined): this;
    getAttributes(): Map<string, unknown>;
    getAttribute(name: string, defaultValue?: unknown): unknown;
    withAttribute(name: string, value: unknown): this;
    withoutAttribute(name: string): this;
}

export default ServerRequestInterface;
