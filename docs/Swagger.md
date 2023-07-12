# Swagger

## API response decorators

| 데코레이터 명                      | 설명                                                                                            | 응답 코드 |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- | --------- |
| @ApiOkResponse()                   | 성공적인 요청에 대한 응답을 정의하는 데 사용됩니다.                                             | 200       |
| @ApiCreatedResponse()              | 새로운 리소스를 성공적으로 생성한 경우에 대한 응답을 정의하는 데 사용됩니다.                    | 201       |
| @ApiAcceptedResponse()             | 비동기 작업이 수락되었음을 나타내는 응답을 정의하는 데 사용됩니다.                              | 202       |
| @ApiNoContentResponse()            | 요청이 성공적이지만 응답 본문이 없음을 나타내는 경우에 사용됩니다.                              | 204       |
| @ApiMovedPermanentlyResponse()     | 요청한 리소스가 새로운 URL로 영구적으로 이동되었음을 나타내는 응답을 정의하는 데 사용됩니다.    | 301       |
| @ApiFoundResponse()                | 요청한 리소스가 다른 URL로 임시로 이동되었음을 나타내는 응답을 정의하는 데 사용됩니다.          | 302       |
| @ApiBadRequestResponse()           | 잘못된 요청에 대한 응답을 정의하는 데 사용됩니다.                                               | 400       |
| @ApiUnauthorizedResponse()         | 인증되지 않은 요청에 대한 응답을 정의하는 데 사용됩니다.                                        | 401       |
| @ApiNotFoundResponse()             | 요청한 리소스를 찾을 수 없는 경우에 대한 응답을 정의하는 데 사용됩니다.                         | 404       |
| @ApiForbiddenResponse()            | 요청한 작업을 수행할 권한이 없는 경우에 대한 응답을 정의하는 데 사용됩니다.                     | 403       |
| @ApiMethodNotAllowedResponse()     | 허용되지 않는 HTTP 메서드로 요청을 보낸 경우에 대한 응답을 정의하는 데 사용됩니다.              | 405       |
| @ApiNotAcceptableResponse()        | 클라이언트가 허용할 수 없는 응답 형식을 요청한 경우에 대한 응답을 정의하는 데 사용됩니다.       | 406       |
| @ApiRequestTimeoutResponse()       | 요청이 시간 초과된 경우에 대한 응답을 정의하는 데 사용됩니다.                                   | 408       |
| @ApiConflictResponse()             | 요청이 서버의 현재 상태와 충돌하는 경우에 대한 응답을 정의하는 데 사용됩니다.                   | 409       |
| @ApiPreconditionFailedResponse()   | 요청의 선행 조건이 충족되지 않은 경우에 대한 응답을 정의하는 데 사용됩니다.                     | 412       |
| @ApiTooManyRequestsResponse()      | 클라이언트가 일정 시간 동안 너무 많은 요청을 보낸 경우에 대한 응답을 정의하는 데 사용됩니다.    | 429       |
| @ApiGoneResponse()                 | 요청한 리소스가 더 이상 서비스되지 않음을 나타내는 응답을 정의하는 데 사용됩니다.               | 410       |
| @ApiPayloadTooLargeResponse()      | 요청 페이로드가 서버의 제한을 초과한 경우에 대한 응답을 정의하는 데 사용됩니다.                 | 413       |
| @ApiUnsupportedMediaTypeResponse() | 지원되지 않는 미디어 유형으로 요청을 보낸 경우에 대한 응답을 정의하는 데 사용됩니다.            | 415       |
| @ApiUnprocessableEntityResponse()  | 요청을 이해할 수 없거나 유효하지 않은 경우에 대한 응답을 정의하는 데 사용됩니다.                | 422       |
| @ApiInternalServerErrorResponse()  | 서버 내부 오류로 인해 요청을 처리할 수 없는 경우에 대한 응답을 정의하는 데 사용됩니다.          | 500       |
| @ApiNotImplementedResponse()       | 요청한 작업이 아직 구현되지 않은 경우에 대한 응답을 정의하는 데 사용됩니다.                     | 501       |
| @ApiBadGatewayResponse()           | 게이트웨이가 요청을 수행하는 동안 잘못된 응답을 받은 경우에 대한 응답을 정의하는 데 사용됩니다. | 502       |
| @ApiServiceUnavailableResponse()   | 서비스를 사용할 수 없는 경우에 대한 응답을 정의하는 데 사용됩니다.                              | 503       |
| @ApiGatewayTimeoutResponse()       | 게이트웨이가 요청을 처리하는 동안 시간 초과가 발생한 경우에 대한 응답을 정의하는 데 사용됩니다. | 504       |
| @ApiDefaultResponse()              | 다른 응답 코드에 해당하지 않는 기본 응답을 정의하는 데 사용됩니다.                              |           |
