import {Context, Handler} from "aws-lambda";


export type InputTestRequest = {
    input: string
};

export type ServerlessRequest = InputTestRequest | null;


export type InputTestResponse = {
    result: string;
}

export type ServerlessResponse = InputTestResponse | string;



export type ServerlessFunction = (event: ServerlessRequest, context: Context) => Promise<ServerlessResponse>;



