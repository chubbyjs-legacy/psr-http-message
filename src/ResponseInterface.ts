import MessageInterface from './MessageInterface';

interface ResponseInterface extends MessageInterface {
    getStatusCode(): number;
    withStatus(code: number, reasonPhrase?: string): ResponseInterface;
    getReasonPhrase(): string;
}

export default ResponseInterface;
