import { Duplex } from 'stream';

interface MessageInterface {
    getProtocolVersion(): string;
    withProtocolVersion(version: string): this;
    getHeaders(): Map<string, Array<string>>;
    hasHeader(name: string): boolean;
    getHeader(name: string): Array<string>;
    getHeaderLine(name: string): string;
    withHeader(name: string, value: Array<string> | string): this;
    withAddedHeader(name: string, value: Array<string> | string): this;
    withoutHeader(name: string): this;
    getBody(): Duplex;
    withBody(body: Duplex): this;
}

export default MessageInterface;
