import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Guardian Controller (e2e)', () => {
  let app: INestApplication;
  let _id;

  const testData = {
    guardian : {
      name: "김민서",
      phone_number: "010-1234-1234"
    },
    newGuardian : {
      name: "강민서",
      phone_number: "010-3322-4422"
    }
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
      .send(testData['newGuardian']);
      expect(response.statusCode).toBe(200)
    });
  });
});
