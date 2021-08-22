import { Duplex } from 'stream';

interface MessageInterface {
    getProtocolVersion(): string;
    withProtocolVersion(version: string): MessageInterface;
    getHeaders(): Map<string, Array<string>>;
    hasHeader(name: string): boolean;
    getHeader(name: string): Array<string>;
    getHeaderLine(name: string): string;
    withHeader(name: string, value: Array<string> | string): MessageInterface;
    withAddedHeader(name: string, value: Array<string> | string): MessageInterface;
    withoutHeader(name: string): MessageInterface;
    getBody(): Duplex;
    withBody(body: Duplex): MessageInterface;
}

export default MessageInterface;
