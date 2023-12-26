# DB Migrations 관리 가이드

## No changes in database schema were found

멍냥뿌지 백엔드는 초기 `Migration`(을)를 고려하지 않았습니다. 따라서 기존 DB를 지우고 `init-schema`(을)를 생성 하였습니다.

## 생성

```bash
npm run migration:generate db/migrations/init-schema
```

## 되돌리기

```bash
npm run migration:run
```

## 실행 시키기

```bash
npm run migration:revert
```
