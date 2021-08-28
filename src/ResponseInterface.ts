import MessageInterface from './MessageInterface';

interface ResponseInterface extends MessageInterface {
    getStatusCode(): number;
    withStatus(code: number, reasonPhrase?: string): this;
    getReasonPhrase(): string;
}

export default ResponseInterface;
