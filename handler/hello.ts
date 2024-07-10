import {Context, Handler} from "aws-lambda";

import {LambdaHandler} from "../common/lambda";

export const sayHello =(request: null,context: Context): Promise<string> => {
    return Promise.resolve("Hello World!");
}

export const hello = (event, context) => LambdaHandler(sayHello)(event, context);
