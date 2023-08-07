import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Guardian Controller (e2e)', () => {
  let app: INestApplication;
  let _id;

  const testData = {
    name: "김민서",
    phoneNumber: "010-1234-1234",
    updateName: "강민서",
    updatePhoneNumber: "010-1111-1234",
    guardian: {},
    updateGuardian: {}
  }

  testData.guardian = {
    name: testData.name,
    phone_number: testData.phoneNumber
  }

  testData.updateGuardian = {
    id: _id,
    name: testData.updateName,
    phone_number: testData.updatePhoneNumber
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/guardian : (POST) : 보호자 생성', ()=>{
    it('보호자 생성하기 성공 테스트', async () => {
      const response = await request(app.getHttpServer())
      .post(`/guardian`)
      .send(testData['guardian']);
      _id = response.body.id;
      expect(response.statusCode).toBe(201)
    });
  });

  describe('/guardian : (PUT) : 보호자 수정', ()=>{
    it('보호자 생성하기 수정하기 테스트', async () => {
      const response = await request(app.getHttpServer())
      .put(`/guardian`)
      .send(testData['updateGuardian']);
      expect(response.statusCode).toBe(200)
    });
  });
});
