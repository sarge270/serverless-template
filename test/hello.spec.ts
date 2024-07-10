import { sayHello} from "../handler/hello";
import {Context} from "aws-lambda";
import {ServerlessResponse} from "../types";

describe('hello handler test', () => {
  it('should return a message', async () => {
    const result = await sayHello(null, {} as Context);
    expect(result).toBe("Hello World!");
  });
});
