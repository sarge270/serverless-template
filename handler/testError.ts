import {Handler} from "aws-lambda";
import {ServerlessResponse} from "../types";
import {handleError, ServerlessError} from "../common/error";

const throwError = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new ServerlessError('This is an error', 400));
        }, 100)
    });

}

export const testError: Handler = async (event, context): Promise<ServerlessResponse> => {
    try{
        await throwError();
        return {
            statusCode: 200,
            body: JSON.stringify({
               message: 'Unreachable code',
            }),
        }
    } catch(e){
        return handleError(e)
    }
}

