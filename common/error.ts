import {ServerlessResponse} from "../types";

export class ServerlessError extends Error {
    errorCode: number;

    constructor(message, code: number) {
        super(message);
        this.name = 'ServerlessError';
        this.errorCode = code;
    }
}


export const handleError = (error: Error): ServerlessResponse => {
    if(error instanceof ServerlessError) {
        return {
            statusCode: error.errorCode,
            body: JSON.stringify({
                message: error.message,
            }),
        }
    } else {
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: `unhandled error : ${error.message}`,
            }),
        }
    }
}
