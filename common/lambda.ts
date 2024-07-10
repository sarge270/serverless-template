import {Context, Handler} from "aws-lambda";
import {ServerlessRequest,  ServerlessFunction} from "../types";
import {handleError} from "./error";

type LambdaResult = {
    body: string;
    statusCode: number;
}


/**
 * LambdaHandler 기본형태, validation이나 event 주입을 하려면 복사해서 사용
 * @param func
 *
 */
export const LambdaHandler = (func:ServerlessFunction)  => async  (event: ServerlessRequest, context: Context): Promise<LambdaResult> => {
    try {
        const result = await func(event, context);
        const body = typeof result === 'string' ? result : JSON.stringify(result);
        return {
            statusCode: 200,
            body
        }
    } catch(err) {
        return handleError(err)
    }

}

/*
 LambdaHandler에 user context를 주입하는 예시코드
 export const UserAuthLambdaHandler = (func:ServerlessFunction)  => async  (event: ServerlessRequest, context: Context): Promise<LambdaResult> => {
    try {
        const user = await userAuth(event);
        //이렇게 할때 type 정의 해주거나
        const userContext = {...context, user};
        const result = await func(event, userContext);
        // ServerlessFunction을 ServerlessUserFunction으로 변경해주면 된다.
        const result = await func(event, context, user);
        return {
            statusCode: 200,
            body: JSON.stringify(result)
        }
    } catch(err) {
        return handleError(err)
    }
 */
