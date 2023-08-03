import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('GuardianController (e2e)', () => {
  let app: INestApplication;
  let _id;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/guardian/:id : (POST) : 보호자 생성하기', ()=>{
    it('보호자 생성하기 성공 테스트', async () => {
      const response = await request(app.getHttpServer())
      .post(`/guardian`)
      .send({
        name: "마모미",
        phone_number: "010-1234-1234",
      });
      _id = response.body.id;
      expect(response.statusCode).toBe(201)
    });
  });

  describe('/guardian : (PUT) : 보호자 수정하기', ()=>{
    it('보호자 생성하기 수정하기 테스트', async () => {
      const response = await request(app.getHttpServer())
      .put(`/guardian`)
      .send({
        id: _id,
        name: "무모미",
        phone_number: "010-1235-1235",
      });
      expect(response.statusCode).toBe(200)
    });
  });
});
