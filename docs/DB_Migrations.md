# DB Migrations 관리 가이드

## No changes in database schema were found

멍냥뿌지 백엔드는 초기 `Migration`(을)를 고려하지 않았습니다. 따라서 기존 DB를 지우고 `init-schema`(을)를 생성 하였습니다.

## 생성

```bash
npm run migration:generate db/migrations/init-schema
```

### 생성 시 명명 규칙

```bash
# {생성: New, 변경: Update}{컬럼: Column, 테이블, Table}{엔티티 명}{컬럼 or 테이블}
npm run migration:generate db/migrations/NewColumnAnimalLikeRead
```

## 실행 시키기

```bash
npm run migration:run
```

## 되돌리기

```bash
npm run migration:revert
```
