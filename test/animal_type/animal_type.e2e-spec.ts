import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('animal_type Controller (e2e)', () => {
  let app: INestApplication;
  let token;
  let _id;

  const testData = {
    animalType : {
      name: "강아지",
      detail_name: "푸들"
    },
    newAnimalType : {
      id: _id,
      detail_name: "진돗개"
    }
  }

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // before login
    const login = await request(app.getHttpServer())
    .post('/users/login')
    .send({
      user_id: "e2e",
      password: "1234",
    });
    
    token = login.body.jwt; //토근 셋팅
  });

  describe('/animal_type : (POST) : 반려동물 타입 생성', ()=>{
    it('반려동물 타입 생성 성공 테스트', async () => {
      const response = await request(app.getHttpServer())
      .post(`/animal_type`)
      .set('Authorization', `Bearer ${token}`)
      .send(testData['animalType']);

      _id = response.body.id;
      expect(response.statusCode).toBe(201);
    });
  });

  describe('/animal_type/name : (GET) : 반려동물 타입 종류 조회', ()=>{
    it('반려동물 타입 종류 조회 성공 테스트', async () => {
      const response = await request(app.getHttpServer())
      .get(`/animal_type/name`)
      .send();

      expect(response.statusCode).toBe(200);
    });
  });

  describe('/animal_type : (GET) : 반려동물 타입 상세 이름 조회', ()=>{
    it('반려동물 타입 상세 이름 성공 테스트', async () => {
      const response = await request(app.getHttpServer())
      .get(`/animal_type/detail_name`)
      .send(testData['animalType'].name);

      expect(response.statusCode).toBe(200);
    });
  });

  describe('/animal_type : (PATCH) : 반려동물 타입 내용 변경', ()=>{
    it('반려동물 타입 내용 변경 성공 테스트', async () => {
      const response = await request(app.getHttpServer())
      .patch(`/animal_type`)
      .set('Authorization', `Bearer ${token}`)
      .send(testData['newAnimalType']);

      expect(response.statusCode).toBe(200);
    });
  });

  describe('/animal_type : (DELETE) : 반려동물 상세 이름으로 삭제', ()=>{
    it('반려동물 상세 이름으로 삭제 성공 테스트', async () => {
      const response = await request(app.getHttpServer())
      .delete(`/animal_type/detail_name`)
      .set('Authorization', `Bearer ${token}`)
      .send({detail_name: testData['newAnimalType'].detail_name});
      expect(response.statusCode).toBe(200);
    });
  });

  describe('/animal_type/name : (DELETE) : 반려동물 이름으로 삭제', ()=>{
    it('반려동물 이름으로 삭제 성공 테스트', async () => {
      const response = await request(app.getHttpServer())
      .delete(`/animal_type/name`)
      .set('Authorization', `Bearer ${token}`)
      .send({name: testData['animalType'].name});      
      expect(response.statusCode).toBe(200);
    });
  });
});
