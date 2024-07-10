<!--
title: 'Dencomm serverless Lambda template' 
description: '덴컴 서버리스 템플릿 예제'
layout: Doc
framework: v4
platform: AWS
language: nodeJS, typescript
priority: 1
authorLink: 'https://www.dencomm.ai'
authorName: 'Dencomm, Inc.'
-->

# Dencomm Serverless Lambda Template

덴컴 서버리스 프로젝트의 aws lambda 배포 기본 template입니다.

## Usage

### Installation

#### 1. serverless v4의 global installation이 필요합니다.
```bash
#via npm 
npm install -g serverless
#via yarn
yan global add serverless
```

#### 2. AWS-CLI 및 AWS 계정 설정이 필요합니다.
https://aws.amazon.com/ko/cli/ 에서 cli 설치 후, `aws configure` 명령어로 계정 설정이 필요합니다.
```bash
aws configure 
```
### Deployment

설정이 완료되었다면, 아래의 커맨드로 쉽게 배포할수 있습니다.

```
serverless deploy
```

stage option으로 배포 스테이지를 쉽게 설정 가능합니다.

```bash
serverless deploy --stage dev
```

```
Deploying "dencomm-serverless-example" to stage "dev" (ap-northeast-2)

✔ Service deployed to stack dencomm-serverless-example-dev (60s)

functions:
  hello: dencomm-serverless-example-dev-hello (5.8 kB)
  testError: dencomm-serverless-example-dev-testError (5.8 kB)
```

### Invocation

배포가 완료되었다면, 아래의 커맨드로 함수를 호출할수 있습니다.

```
serverless invoke --function hello
```

로컬 개발중인 함수도 배포없이 호출 테스트가 가능합니다.
이 경우 local 개발중인 코드가 호출됩니다.
```
serverless invoke local --function hello
```

Which should result in response similar to the following:

```json
{
  "statusCode": 200,
  "body": "{\"message\":\"Go Serverless v4.0! Your function executed successfully!\"}"
}
```

### Local development

`dev` command 를 이용해 개발 도중의 함수를 테스트할 수있습니다.

```
serverless dev
```
자세한 문서는 [서버리스 공식문서](https://www.serverless.com/console-docs/docs-application-guide-dev-mode)를 확인해주세요. 

### yml 설정

serverless 는 yml 파일을 이용하여 배포 및 provider 설정을 할 수 있습니다. 문서가 방대하므로 해당 프로젝트 yml에는 필수적인 부분만
적어놓았습니다. 플러그인이나 arn등 공식 설정에 관해서는 [서버리스 공식문서](https://www.serverless.com/framework/docs/providers/aws/guide/serverless.yml)를 참고해주세요.


### CLI 확인

다양한 커맨드를 제공합니다. 자세한 사항은 [서버리스 공식문서](https://www.serverless.com/framework/docs/providers/aws/cli-reference)를 참고해주세요.


### Test code 작성
기본적인 테스트 셋업을 `jest` 라이브러리를 통해 셋팅해두었습니다. 추가적인 셋팅이나 테스트 코드 작성은 `tests/**.spec.ts` 파일을 추가하여 작성해주세요.


### Handler 작성
예시 코드를 hello.ts에 작성해두었습니다.
```typescript
import {Context, Handler} from "aws-lambda";
// 핸들러에 대한 자세한 주석은 파일 안의 주석 참고 바랍니다.
import {LambdaHandler} from "../common/lambda";

export const sayHello =(request: null,context: Context): Promise<string> => {
    return Promise.resolve("Hello World!");
}

export const hello = (event, context) => LambdaHandler(sayHello)(event, context);


```

### 환경변수 설정
기본적으로는 serverless.yml을 통해 설정합니다만, env가 스테이지에 따라 변경될 경우에는 .env.{stage}파일을 만들면 serverless가 자동적으로
인식합니다. 자세한 부분은 아래 문서를 참고 부탁드립니다.
https://www.serverless.com/framework/docs/guides/upgrading-v4

