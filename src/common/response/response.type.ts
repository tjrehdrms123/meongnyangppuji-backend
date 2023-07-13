// import { ApiProperty } from "@nestjs/swagger";
// import { ResponseSuccessInterface } from "./base/response.type.interface";

// // 응답 성공
// const RESPONSE_SUCCESS = true;
// // 응답 실패
// const RESPONSE_FAILER = false;
// // 공통 응답
// export class commonResponseType {
//   @ApiProperty({
//     example: 'acd9c17d-56f5-42dc-8cbb-7808e080cab2',
//     description: 'UUID',
//     required: true
//   })
//   id: string

//   @ApiProperty({
//     example: '2023-07-13T06:28:32.525Z',
//     description: '업데이트 일자',
//     required: true
//   })
//   updatedAt: Date

//   @ApiProperty({
//     example: '2023-07-13T06:28:32.525Z',
//     description: '생성 일자',
//     required: true
//   })
//   createdAt: Date
// }

// /**
//  * @ApiCreatedResponse()
//  * 200: 새로운 리소스를 성공적으로 생성한 경우에 대한 응답
//  */
// export class SwaggerApiReponse {
//   ApiCreatedResponse: ResponseSuccessInterface = {
//     success: RESPONSE_SUCCESS,
//     data: {
//       ...commonResponseType,
//     }
//   }
// }