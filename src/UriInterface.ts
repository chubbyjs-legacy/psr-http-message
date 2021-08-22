interface UriInterface {
    getSchema(): string;
    getAuthority(): string;
    getUserInfo(): string;
    getHost(): string;
    getPort(): number | undefined;
    getPath(): string;
    getQuery(): string;
    getFragment(): string;
    withScheme(scheme: string): UriInterface;
    withUserInfo(user: string, password?: string): UriInterface;
    withHost(scheme: string): UriInterface;
    withPort(port?: number): UriInterface;
    withPath(scheme: string): UriInterface;
    withQuery(scheme: string): UriInterface;
    withFragment(scheme: string): UriInterface;
    toString(): string;
}

export default UriInterface;
