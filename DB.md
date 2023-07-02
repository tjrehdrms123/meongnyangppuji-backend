# DB

## animal Table

| 컬럼명                | 타입    | 설명               |
| --------------------- | ------- | ------------------ |
| name                  | varchar | 이름               |
| guardian_name         | varchar | 보호자명           |
| guardian_phone_number | varchar | 보호자 휴대폰 번호 |
| introduction          | varchar | 소개               |
| type                  | number  | 종류 FK            |
| detail_type           | varchar | 반려동물 품종      |
| age                   | number  | 나이               |
| sex                   | enum    | 성별               |
| qr_issuance           | enum    | QR 발행 여부       |
| profile               | number  | 프로필 이미지 FK   |
