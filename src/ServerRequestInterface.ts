import RequestInterface from './RequestInterface';

export type QueryParams = Map<string, string | Array<string> | QueryParams>;
export type ParsedBody = Map<string, ParsedBody> | Array<ParsedBody> | string | number | boolean | null;

interface ServerRequestInterface extends RequestInterface {
    getCookieParams(): Map<string, string>;
    withCookieParams(cookieParams: Map<string, string>): ServerRequestInterface;
    getQueryParams(): QueryParams;
    withQueryParams(queryParams: QueryParams): ServerRequestInterface;
    getParsedBody(): ParsedBody | undefined;
    withParsedBody(parsedBody: ParsedBody | undefined): ServerRequestInterface;
    getAttributes(): Map<string, unknown>;
    getAttribute(name: string, defaultValue: unknown): unknown;
    withAttribute(name: string, value: unknown): ServerRequestInterface;
    withoutAttribute(name: string): ServerRequestInterface;
}

export default ServerRequestInterface;
