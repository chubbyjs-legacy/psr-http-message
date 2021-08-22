import MessageInterface from './MessageInterface';
import UriInterface from './UriInterface';

interface RequestInterface extends MessageInterface {
    getRequestTarget(): string;
    withRequestTarget(requestTarget: string): RequestInterface;
    getMethod(): string;
    withMethod(name: string): RequestInterface;
    getUri(): UriInterface;
    withUri(uri: UriInterface, preserveHost?: boolean): RequestInterface;
}

export default RequestInterface;
