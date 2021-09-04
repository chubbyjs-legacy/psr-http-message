import MessageInterface from './MessageInterface';
import UriInterface from './UriInterface';

export enum Method {
    CONNECT = 'CONNECT',
    DELETE = 'DELETE',
    GET = 'GET',
    HEAD = 'HEAD',
    OPTIONS = 'OPTIONS',
    PATCH = 'PATCH',
    POST = 'POST',
    PUT = 'PUT',
    TRACE = 'TRACE',
}

interface RequestInterface extends MessageInterface {
    getRequestTarget(): string;
    withRequestTarget(requestTarget: string): this;
    getMethod(): Method;
    withMethod(name: Method): this;
    getUri(): UriInterface;
    withUri(uri: UriInterface, preserveHost?: boolean): this;
}

export default RequestInterface;
