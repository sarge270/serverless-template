import {Handler} from "aws-lambda";
import {ServerlessResponse} from "../types";

export const hello: Handler = async (event, context): Promise<ServerlessResponse> => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World!',
            input: event,
        }),
    };
}

