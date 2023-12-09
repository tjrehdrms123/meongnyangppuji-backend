-- MySQL dump 10.13  Distrib 8.1.0, for macos13.3 (arm64)
--
-- Host: localhost    Database: db_meongnyangppuji
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `animal`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animal` (
  `id` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` timestamp(6) NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '이름',
  `introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '소개',
  `age` int NOT NULL COMMENT '나이',
  `sex` tinyint NOT NULL COMMENT '성별',
  `animal_type_id` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `qr_id` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `uploads_id` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `card_id` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_d0a8151b2b6d5b52f6024a18c9` (`qr_id`),
  UNIQUE KEY `REL_802786a5b9968d9ffedc81496a` (`uploads_id`),
  UNIQUE KEY `REL_00a33d0942f123abb5f5b790d8` (`card_id`),
  KEY `FK_e8d69da698bffc67a5399dc765b` (`animal_type_id`),
  CONSTRAINT `FK_00a33d0942f123abb5f5b790d81` FOREIGN KEY (`card_id`) REFERENCES `card` (`id`),
  CONSTRAINT `FK_802786a5b9968d9ffedc81496af` FOREIGN KEY (`uploads_id`) REFERENCES `uploads` (`id`),
  CONSTRAINT `FK_d0a8151b2b6d5b52f6024a18c96` FOREIGN KEY (`qr_id`) REFERENCES `qr` (`id`),
  CONSTRAINT `FK_e8d69da698bffc67a5399dc765b` FOREIGN KEY (`animal_type_id`) REFERENCES `animal_type` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal`
--

LOCK TABLES `animal` WRITE;
/*!40000 ALTER TABLE `animal` DISABLE KEYS */;
/*!40000 ALTER TABLE `animal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animal_type`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animal_type` (
  `id` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` timestamp(6) NULL DEFAULT NULL,
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '이름(강아지,고양이)',
  `detail_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '상세 이름 (푸들, 진돗개, 코리안 숏헤어...)',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_9cde3710dbe9aa5dbbe796bd29` (`detail_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal_type`
--

LOCK TABLES `animal_type` WRITE;
/*!40000 ALTER TABLE `animal_type` DISABLE KEYS */;
INSERT INTO `animal_type` VALUES ('1830b29d-f1a4-43e1-b89e-edec8c01d333','2023-09-02 09:56:43.361348','2023-09-02 09:56:43.361348',NULL,'고양이','<script>1.232a2.</script>'),('1a437575-4138-4b95-a823-5ced7c3b5963','2023-09-02 10:07:50.974233','2023-09-02 10:07:50.974233',NULL,'고양이','<script>alert(\'ㅍ22\')</script>'),('24abdbe0-8590-4fed-8c5c-20960c5198f9','2023-09-02 09:35:04.765270','2023-09-02 09:35:04.765270',NULL,'고양이','냥냥냥2..'),('2a3afdbc-6dd4-457e-ae53-ac7ce7184c89','2023-09-02 09:59:40.072198','2023-09-02 09:59:40.072198',NULL,'고양이','<script>alert(\'as2d\')</script>'),('2fedc922-1923-42b6-b4f4-f61d02e087e9','2023-07-21 14:57:11.855193','2023-07-22 06:43:15.832708',NULL,'고양이','시베리아 고양이'),('32ee13fb-d53c-4db3-9acb-43cf69b6898c','2023-09-02 09:43:30.454487','2023-09-02 09:43:30.454487',NULL,'고양이','<script>냥냥6냥22.23.</script>'),('3b8fb1f1-23c0-4062-babb-c73f1ef59fe2','2023-09-02 09:49:42.262040','2023-09-02 09:49:42.262040',NULL,'고양이','<script>냥냥6냥22.232.</script>'),('45953ce3-cbdb-40d0-b276-c20f4290ff1d','2023-09-02 09:57:44.286888','2023-09-02 09:57:44.286888',NULL,'고양이','<script>alert(\'asd\')</script>'),('4688c2a5-eea8-4856-8533-ad779d73dab0','2023-07-22 06:31:45.210546','2023-07-22 06:31:45.210546',NULL,'고양이','냥냥냥..'),('5a2851ea-ea2d-4fef-aed0-0902ca0d1cbf','2023-09-02 10:00:50.555217','2023-09-02 10:00:50.555217',NULL,'고양이','<script>alert(\'ㅁ\')</script>'),('6554761f-6376-4af4-a367-fcd0f0f1d3e1','2023-07-21 15:38:31.549462','2023-07-21 16:46:54.000000',NULL,'고양이','시베리아 고양이3'),('71b6e791-f1cb-4998-b1fb-ccc855a19ff7','2023-07-21 14:57:51.913369','2023-07-21 14:57:51.913369',NULL,'강아지','푸들'),('7dca2db9-613c-4688-a26b-415c749e3893','2023-09-02 09:54:31.151920','2023-09-02 09:54:31.151920',NULL,'고양이','<script>1.2322.</script>'),('85e15583-43c9-49a1-94e9-c25fcbdacc25','2023-07-21 14:58:03.614251','2023-07-21 14:58:03.614251',NULL,'강아지','멍뭉'),('8cc32971-8a20-4217-aad8-28bad116437c','2023-09-02 10:02:50.852787','2023-09-02 10:02:50.852787',NULL,'고양이','<script>alert(\'ㅁ2\')</script>'),('a57efadd-6353-40ab-ac7f-0e7b9af72ba3','2023-09-02 09:53:36.769015','2023-09-02 09:53:36.769015',NULL,'고양이','<script>냥냥6냥22.2322.</script>'),('ced6300c-b9a7-43c6-854b-aae155ef1d39','2023-07-21 14:58:27.990499','2023-07-22 06:43:15.834350',NULL,'고양이','냥냥냥'),('d35f8d68-579b-4a84-835b-386f2d7696c8','2023-09-02 09:40:49.860346','2023-09-02 09:40:49.860346',NULL,'고양이','<script>냥냥6냥2.23.</script>'),('d67d62d6-6806-417c-9b04-f55fa4aff96a','2023-09-02 10:03:26.949852','2023-09-02 10:03:26.949852',NULL,'고양이','<script>alert(\'ㅁ22\')</script>'),('e7e8fd6f-496a-49ff-9437-6311c1d4ef26','2023-07-21 14:58:16.804937','2023-07-21 14:58:16.804937',NULL,'강아지','강멍이'),('e984e8fb-94b6-45a8-8339-294abeaf293d','2023-09-02 09:35:57.022432','2023-09-02 09:35:57.022432',NULL,'고양이','<script>냥냥냥2.2.</script>'),('f759a8c3-9b99-4b93-81d0-760400cea803','2023-09-02 09:35:15.963405','2023-09-02 09:35:15.963405',NULL,'고양이','<script>냥냥냥2..</script>'),('fa920bd4-9f6f-4215-ae5c-0afd7328e1bc','2023-09-02 09:37:41.566766','2023-09-02 09:37:41.566766',NULL,'고양이','<script>냥냥냥2.23.</script>'),('ff4f0f10-3a08-4fb7-b7e9-a125e422fefd','2023-09-02 09:57:06.184777','2023-09-02 09:57:06.184777',NULL,'고양이','<script>1.2a232a2.</script>');
/*!40000 ALTER TABLE `animal_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `id` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` timestamp(6) NULL DEFAULT NULL,
  `background_color` varchar(255) COLLATE utf8mb4_general_ci NOT NULL COMMENT '등록증 배경 색상',
  `option` int NOT NULL COMMENT '배경 레이아웃 (0: 기본, 1: 옵션1, 2: 옵션2...)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guardian`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guardian` (
  `id` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` timestamp(6) NULL DEFAULT NULL,
  `name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '보호자 이름',
  `phone_number` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '보호자 전화번호',
  `users_id` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_cca83c2493b2821c7d650219a3` (`users_id`),
  CONSTRAINT `FK_cca83c2493b2821c7d650219a3c` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guardian`
--

LOCK TABLES `guardian` WRITE;
/*!40000 ALTER TABLE `guardian` DISABLE KEYS */;
INSERT INTO `guardian` VALUES ('0410f2de-26d5-42b3-b22e-706ad0b42f44','2023-08-17 10:37:21.041577','2023-08-17 10:37:21.041577',NULL,'김민서','010-1234-1234',NULL),('45a81262-9bb7-4078-b3fc-013011e5e7ad','2023-10-03 11:39:01.113837','2023-10-03 11:39:01.113837',NULL,'홍길동','010-1234-1234','d334ada5-4d14-4ff0-be35-246c5be1ce8b'),('7898a6e0-36e3-483f-97f9-626915ef32a8','2023-10-03 11:43:37.215090','2023-10-03 11:43:37.215090',NULL,'디디','01012341234','39f33968-a804-4a1e-9c4d-cab883b667d3'),('909d6cc5-8e56-43a8-9758-a0b25399a0ef','2023-08-17 10:37:20.916194','2023-08-17 10:37:20.916194',NULL,'김민서','010-1234-1234',NULL),('d6436d2e-8a1c-4fa4-af64-7d2b0578e559','2023-08-17 10:37:20.754562','2023-08-17 10:37:20.754562',NULL,'김민서','010-1234-1234',NULL);
/*!40000 ALTER TABLE `guardian` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guardian_animal`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guardian_animal` (
  `id` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` timestamp(6) NULL DEFAULT NULL,
  `guardian_id` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `animal_id` varchar(36) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_22f738c982c4b349ed272d8ace3` (`guardian_id`),
  KEY `FK_ed5cb64d4320fcb41350907da64` (`animal_id`),
  CONSTRAINT `FK_22f738c982c4b349ed272d8ace3` FOREIGN KEY (`guardian_id`) REFERENCES `guardian` (`id`),
  CONSTRAINT `FK_ed5cb64d4320fcb41350907da64` FOREIGN KEY (`animal_id`) REFERENCES `animal` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guardian_animal`
--

LOCK TABLES `guardian_animal` WRITE;
/*!40000 ALTER TABLE `guardian_animal` DISABLE KEYS */;
/*!40000 ALTER TABLE `guardian_animal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qr`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `qr` (
  `id` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` timestamp(6) NULL DEFAULT NULL,
  `qr_issuance` tinyint NOT NULL COMMENT 'QR 발행 여부 (0: 미발행, 1: 발행)',
  `qr_use` tinyint NOT NULL COMMENT 'QR 사용 여부 (0: 미사용, 1: 사용)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qr`
--

LOCK TABLES `qr` WRITE;
/*!40000 ALTER TABLE `qr` DISABLE KEYS */;
INSERT INTO `qr` VALUES ('c9a7bc6d-e5e2-4459-ba39-94dcd928cc86','2023-09-01 09:52:49.497985','2023-09-01 09:52:49.497985',NULL,1,1);
/*!40000 ALTER TABLE `qr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uploads`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `uploads` (
  `id` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` timestamp(6) NULL DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_general_ci NOT NULL COMMENT '원본 이미지',
  `img_crop` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '크롭 이미지',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uploads`
--

LOCK TABLES `uploads` WRITE;
/*!40000 ALTER TABLE `uploads` DISABLE KEYS */;
/*!40000 ALTER TABLE `uploads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--


/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` varchar(36) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `deleted_at` timestamp(6) NULL DEFAULT NULL,
  `user_id` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '유저 아이디',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '패스워드',
  `consent_check` tinyint NOT NULL COMMENT '서비스이용약관',
  `privacy_policy_check` varchar(255) COLLATE utf8mb4_general_ci NOT NULL COMMENT '개인정보처리방침',
  `role` enum('User','Admin') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'User',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_96aac72f1574b88752e9fb0008` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('0803697b-1927-429a-9455-fd41f1587158','2023-10-01 15:25:26.056811','2023-10-01 15:25:26.056811',NULL,'asdsa123','$2b$10$FVS3H9rqGuoboKhWenYSZ.ZbWlJP563NK.jv1Jst3iTstXjaj0p16',1,'1','User'),('39f33968-a804-4a1e-9c4d-cab883b667d3','2023-10-03 11:43:25.101673','2023-10-03 11:43:25.101673',NULL,'dev','$2b$10$5k6INOWO6W39GQf29vkoQejktqRg9ZoAW64P2JEeTkeLKZsdc94Ju',1,'1','User'),('5ffe3f3c-71f6-4659-9909-de22e2a44b57','2023-10-03 10:10:34.816473','2023-10-03 10:10:34.816473',NULL,'asdfasd','$2b$10$r/id/nLwFBo/DasMKsspCuCYHlAmuqBAsfpgcgbEdHDJxncxHSojS',1,'1','User'),('6846fd71-7b21-40de-bad0-f19d62a700bc','2023-10-03 10:41:45.221458','2023-10-03 10:41:45.221458',NULL,'sadfsa','$2b$10$5gpjBJ3qDk1C2IDjq/n8EubFI93bkMW5fEh3r6.nDyz44ap/IC3Cm',1,'1','User'),('7200d8d8-a74b-4b16-8c66-e07c16e84b11','2023-10-03 10:32:39.239926','2023-10-03 10:32:39.239926',NULL,'asd','$2b$10$dHXPMmnk2UhMRERrV4u8SOjMw2XQnHjgzTTQv.Up9u0jWmtuNSlFO',1,'1','User'),('77b74c72-0933-4b61-aedd-ce987723a6ee','2023-10-03 10:44:09.796613','2023-10-03 10:44:09.796613',NULL,'ㅁ','$2b$10$Hbs0NxrqaIcJk8pSsFx3RuD14rTh61VWOoOYAmb9NZrx3ZmtD7D8q',1,'1','User'),('97f67756-5ac7-43b0-9e09-ae45c8619e69','2023-10-03 10:45:16.728250','2023-10-03 10:45:16.728250',NULL,'asdf','$2b$10$iPWJrPmcw9vcgx5X/yDzCOnolOYSewQ7UCMauj7hfQQsoicVgDTeW',1,'1','User'),('b13e2ccd-7249-4cec-b743-42442cb9889e','2023-10-03 10:42:07.297887','2023-10-03 10:42:07.297887',NULL,'ffff','$2b$10$nHk3VFOz5U5eKgvOnnXipeG6kykbNlT96xhRGMTrWeN4UwxQDMHo6',1,'1','User'),('bb73b2f5-eac7-4232-b4a9-0e83ce513e48','2023-10-03 10:35:37.326789','2023-10-03 10:35:37.326789',NULL,'asd123123','$2b$10$uW.CRsTlGIH.npIEzv2cFOCEeztVEi0PlQYlECUeg9GqpL9fHUsQO',1,'1','User'),('d28ee53e-5ffe-41f3-a3cc-4d4328c49ed6','2023-08-17 10:37:20.844013','2023-08-17 10:37:20.844013',NULL,'e2e','$2b$10$cALK0zQIql.Yfrd24s0EquXhZPVHbii88o8hfPb.uvq3KN7muhWo.',1,'1','User'),('d334ada5-4d14-4ff0-be35-246c5be1ce8b','2023-09-02 09:33:02.273657','2023-09-02 09:33:02.273657',NULL,'test','$2b$10$R9vrkWjAkSKcqdPcjdu2luJZw9d0NHWJ3oLS4Rg2mx/6STukL4v/K',1,'1','User'),('f9a3fab8-b7d3-42e8-a6a6-3e7b6632d78e','2023-10-03 09:59:03.279396','2023-10-03 09:59:03.279396',NULL,'dsafljl','$2b$10$OC65M2IxIL7gnePpiHu55ONaEWXAxi/kISu/9pCJnrWzsW1.cnsgq',1,'1','User'),('fe766db5-f838-4d49-882f-1de85c047976','2023-10-03 10:44:19.667051','2023-10-03 10:44:19.667051',NULL,'a','$2b$10$WYByvVlu9IRlzBmYWQMIzOpIM5Dd12M672VuE.voWd9xRpoeHz6xq',1,'1','User');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db_meongnyangppuji'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-08 18:00:37
