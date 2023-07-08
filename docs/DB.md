# DB

### Relation

| 부모 테이블     | 자식 테이블 | 관계 | 설명                                                                          |
| --------------- | ----------- | ---- | ----------------------------------------------------------------------------- |
| user            | guardian    | 1:1  | 한 명의 유저가 한 명의 보호자만 가질 수 있다는 것을 의미합니다.               |
| guardian_animal | animal      | M:N  | 한 마리의 반려동물이 여러 명의 보호자가 있을 수도 있다는 것을 의미합니다.     |
| guardian_animal | guardian    | M:N  | 한 명의 보호자가 여러 마리의 반려동물을 가질 수 있다는 것을 의미합니다.       |
| animal          | animal_type | 1:1  | 한 마리의 반려동물은 하나의 반려동물 종류에만 속할 수 있다는 것을 의미합니다. |
| qr              | animal      | 1:1  | 한 마리의 반려동물은 하나의 QR 코드를 가질 수 있다는 것을 의미합니다.         |

---

### user | 유저 테이블

| 컬럼명               | 타입    | 설명                                  |
| -------------------- | ------- | ------------------------------------- |
| id                   | int     | 고유 아이디                           |
| name                 | varchar | 이름                                  |
| password             | varchar | 패스워드                              |
| consent_check        | boolean | 서비스이용약관 (1: 미체크, 2: 체크)   |
| privacy_policy_check | boolean | 개인정보처리방침 (1: 미체크, 2: 체크) |
| guardian_id          | number  | 보호자 FK                             |

---

### guardian | 보호자 테이블

| 컬럼명       | 타입    | 설명               |
| ------------ | ------- | ------------------ |
| id           | number  | 고유 아이디        |
| name         | varchar | 보호자 이름        |
| phone_number | number  | 보호자 휴대폰 번호 |

---

### guardian_animal | 보호자 반려견 연결하는 중간 테이블

| 컬럼명      | 타입   | 설명        |
| ----------- | ------ | ----------- |
| id          | number | 고유 아이디 |
| guardian_id | number | 보호자 FK   |
| animal_id   | number | 반려동물 FK |

---

### animal | 반려동물 테이블

| 컬럼명       | 타입    | 설명                    |
| ------------ | ------- | ----------------------- |
| id           | number  | 고유 아이디             |
| name         | varchar | 이름                    |
| introduction | varchar | 소개                    |
| age          | int     | 나이                    |
| sex          | boolean | 성별 (1: 남자, 2: 여자) |
| profile_img  | varchar | 프로필 이미지           |
| animal_type  | number  | 반려동물 종류 FK        |
| qr_id        | int     | QR FK                   |

---

### animal_type | 반려동물 종류 테이블

| 컬럼명      | 타입    | 설명                                  |
| ----------- | ------- | ------------------------------------- |
| id          | number  | 고유 아이디                           |
| name        | varchar | 이름 (강아지, 고양이)                 |
| detail_name | varchar | 상세 이름 (푸들, 진돗개, 차우차우...) |

---

### qr | QR 코드 관리 테이블

| 컬럼명      | 타입    | 설명                              |
| ----------- | ------- | --------------------------------- |
| id          | number  | 고유 아이디                       |
| qr_issuance | boolean | QR 발행 여부 (1: 미발행, 2: 발행) |
| qr_use      | boolean | QR 사용 여부 (1: 미사용, 2: 사용) |
| animal_id   | number  | animal FK                         |
