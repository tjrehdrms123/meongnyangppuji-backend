# DB

### Relation
```
animal : guardian <M:N>
animal : animal_type <1:1>
```

---

### animal | 반려동물 

| 컬럼명                | 타입    | 설명               |
| --------------------- | ------- | ------------------ |
| id                    | number | 고유 아이디          |
| name                  | varchar | 이름               |
| guardian              | varchar | 보호자 FK          |
| introduction          | varchar | 소개               |
| animal_type           | varchar | 종류 FK            |
| detail_type           | varchar | 반려동물 품종       |
| age                   | int     | 나이               |
| sex                   | enum    | 성별               |
| qr_issuance           | enum    | QR 발행 여부       |
| profile_img           | varchar | 프로필 이미지      |

---

### guardian | 보호자

| 컬럼명                | 타입    | 설명               |
| --------------------- | ------- | ------------------ |
| id                  | number | 고유 아이디               |
| name                  | varchar | 보호자 이름               |
| phone_number          | number | 보호자 휴대폰 번호               |
| animal                | number | 반려동물 FK               |

---

### animal_type | 반려동물 종류

| 컬럼명                | 타입    | 설명               |
| --------------------- | ------- | ------------------ |
| id                    | number | 고유 아이디               |
| name                  | varchar | 이름               |
| rep_image                 | number | 대표 이미지               |
