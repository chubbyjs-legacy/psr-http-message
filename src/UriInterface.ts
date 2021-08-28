interface UriInterface {
    getSchema(): string;
    getAuthority(): string;
    getUserInfo(): string;
    getHost(): string;
    getPort(): number | undefined;
    getPath(): string;
    getQuery(): string;
    getFragment(): string;
    withScheme(scheme: string): this;
    withUserInfo(user: string, password?: string): this;
    withHost(scheme: string): this;
    withPort(port?: number): this;
    withPath(scheme: string): this;
    withQuery(scheme: string): this;
    withFragment(scheme: string): this;
    toString(): string;
}

export default UriInterface;
