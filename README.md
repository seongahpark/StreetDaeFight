# Getting Started with StreetDaeFight
<div align="center">
<img src="https://img.shields.io/badge/fastify-000000?style=flat-square&logo=Fastify&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>
</div>
This project was bootstrapped with Fastify-CLI.

## Summary

> 2022 대선을 맞이해 나와 가장 잘 맞는 / 잘 맞지 않는 대선 후보자를 보기 위한 성향 조사 웹 페이지

- 사용자는 총 28개의 문항에서 찬성/반대를 선택한 뒤, 최종 제출을 통해 결과 확인이 가능하다

- 문항은 4명의 후보 마다 7개의 카테고리에서 하나씩 랜덤으로 선정해 온다

  > **문항 목록**
  >
  > - 외교∙안보∙국방
  > - 경제∙복지
  > - 경제∙노동
  > - 사회∙복지
  > - 교육
  > - 환경
  > - IT

## Team
| 이름   | GitHub                                         |
| ------ | ---------------------------------------------- |
| 박성아 | [@seongahpark](https://github.com/seongahpark) |
| 우재무 | [@Jaemoooo](https://github.com/Jaemoooo)       |
| 김창기 | [@kimminlo](https://github.com/kimminlo)       |

## API

[StreetDaeFight-swagger](https://app.swaggerhub.com/apis/seongahpark/PJ1-Vote-API/1.0.0)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

## .env Setting

```
MONGODB_ENDPOINT=mongodb+srv://seongahpark:<password>@cluster0.xtlcc.mongodb.net/streetDaeFight?retryWrites=true&w=majority
COLLECTION_NAME_PRESIDENT="president"
COLLECTION_NAME_PROMISE="promise"
COLLECTION_NAME_PROMISE_CATEGORY="promise_category"
COLLECTION_NAME_USER="user"
COLLECTION_NAME_USER_PROMISE="user_promise"
```

## Directory

```sh
├─ model
├─ plugins
├─ routes
│  ├─ promise
│  ├─ user
├─ test
├─ ERD.png
├─ API.md
├─ README.md
```
