# DB

### Relation

```
animal : guardian <M:N>
animal : animal_type <1:1>
```

---

### animal | 반려동물

| 컬럼명         | 타입    | 설명          |
| -------------- | ------- | ------------- |
| id             | number  | 고유 아이디   |
| name           | varchar | 이름          |
| introduction   | varchar | 소개          |
| detail_type    | varchar | 반려동물 품종 |
| age            | int     | 나이          |
| sex            | enum    | 성별          |
| profile_img    | varchar | 프로필 이미지 |
| guardian_id    | int     | 보호자 FK     |
| animal_type_id | int     | 종류 FK       |
| qr_id          | int     | QR FK         |

---

### guardian | 보호자

| 컬럼명       | 타입    | 설명               |
| ------------ | ------- | ------------------ |
| id           | number  | 고유 아이디        |
| name         | varchar | 보호자 이름        |
| phone_number | number  | 보호자 휴대폰 번호 |
| animal_id    | number  | 반려동물 FK        |

---

### animal_type | 반려동물 종류

| 컬럼명    | 타입    | 설명        |
| --------- | ------- | ----------- |
| id        | number  | 고유 아이디 |
| name      | varchar | 이름        |
| rep_image | number  | 대표 이미지 |

---

### qr | QR 코드

| 컬럼명      | 타입   | 설명         |
| ----------- | ------ | ------------ |
| id          | number | 고유 아이디  |
| qr_issuance | enum   | QR 발행 여부 |
| qr_use      | enum   | QR 사용 여부 |
