import { throwError} from "../handler/testError";
import {Context} from "aws-lambda";
import {ServerlessError} from "../common/error";

describe('testError handler test', () => {
    it('should throw error', async () => {
       await expect(throwError(null, {} as Context)).rejects.toThrow(new ServerlessError('This is an error', 400));
    });
});
