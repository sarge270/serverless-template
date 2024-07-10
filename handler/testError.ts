import {Context, Handler} from "aws-lambda";
import {ServerlessResponse} from "../types";
import {handleError, ServerlessError} from "../common/error";
import {LambdaHandler} from "../common/lambda";

export const throwError = (event: null, context: Context): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new ServerlessError('This is an error', 400));
        }, 100)
    });

}

export const testError: Handler =  (event, context)=> LambdaHandler(throwError)(event, context);
