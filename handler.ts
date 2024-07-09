import {ServerlessResponse} from "./types";

exports.hello = async (event): Promise<ServerlessResponse> => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v4.0! Your function executed successfully!'
        })
    };
};
