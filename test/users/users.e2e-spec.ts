import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('Guardian Controller (e2e)', () => {
  let app: INestApplication;
  let token;
  let guardian_id;

  const testData = {
    user_id: "e2e",
    consent_check:true,
    privacy_policy_check: true,
    password: "1234",
    name: "김민서",
    phoneNumber: "010-1234-1234",
    loginData: {},
    registerData: {},
    guardianData: {}
  }

  // before guardian 보호자 생성 후 연결
  testData.guardianData = {
    name: testData.name,
    phone_number: testData.phoneNumber
  }

  // 회원가입 객체
  testData.registerData = {
    user_id: testData.user_id,
    consent_check: testData.consent_check,
    privacy_policy_check: testData.privacy_policy_check,
    password: testData.password,
    // React: guardian_id는 유저를 생성할때 추가해줍니다.`
  }

  // 로그인 객체
  testData.loginData = {
    user_id: testData.user_id,
    password: testData.password
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // before guardian
    const guardian = await request(app.getHttpServer())
    .post('/guardian')
    .send(testData['guardianData']);

    guardian_id = guardian.body.id;
  });

  describe('/users : (POST) : 유저 생성', ()=>{
    it('유저 생성하기 성공 테스트', async () => {
      const response = await request(app.getHttpServer())
      .post(`/users`)
      .send({
        ...testData['registerData'],
        guardian_id: guardian_id
      });
      expect(response.statusCode).toBe(201);
    });
  });

  describe('/users/login : (POST) : 유저 로그인', ()=>{
    it('유저 로그인 성공 테스트', async () => {
      const response = await request(app.getHttpServer())
      .post(`/users/login`)
      .send(testData['loginData']);
      token = response.body.jwt; // Read: 로그인 JWT 셋팅
      expect(response.statusCode).toBe(201);
    });
  });

  describe('/users : (GET) : 유저 조회', ()=>{
    it('유저 조회 성공 테스트', async () => {
      const response = await request(app.getHttpServer())
      .get(`/users`)
      .set('Authorization', `Bearer ${token}`)
      .send(testData['loginData']);
      console.log(response.body);
      expect(response.statusCode).toBe(200);
    });
  });

});
