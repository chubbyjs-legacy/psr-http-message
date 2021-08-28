import MessageInterface from './MessageInterface';
import UriInterface from './UriInterface';

interface RequestInterface extends MessageInterface {
    getRequestTarget(): string;
    withRequestTarget(requestTarget: string): this;
    getMethod(): string;
    withMethod(name: string): this;
    getUri(): UriInterface;
    withUri(uri: UriInterface, preserveHost?: boolean): this;
}

export default RequestInterface;
