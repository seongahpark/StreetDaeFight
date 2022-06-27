'use strict'

const { createOne, chkAuthorizationHeaders, createUserRes } = require('../../model')

module.exports = async function (app, opts) {
  app.post('/promise', async function (request, reply) {
    const tmpId = await chkAuthorizationHeaders(request.headers.authorization)
    const result = await createOne(this.mongo, tmpId, request.body)

    if(!result){
      reply
      .code(404) //상태코드 보내는 메소드
      .header('content-type', 'application/json')
      .send({error : "Not Found"}) //데이터베이스에서 꺼내와야 함
    }else{
    reply
      .code(200) //상태코드 보내는 메소드
      .header('content-type', 'application/json')
      .send({user_id : tmpId, value : result, ok: 1}) //데이터베이스에서 꺼내와야 함
    }
  })

  app.post('/', async function (request, reply) {
    const tmpId = await chkAuthorizationHeaders(request.headers.authorization)
    const result = await createUserRes(this.mongo, tmpId, request.body)

    //console.log(result)
    if(!result){
      reply
      .code(404) //상태코드 보내는 메소드
      .header('content-type', 'application/json')
      .send({error : "Not Found"}) //데이터베이스에서 꺼내와야 함
    }else{
      reply
        .code(200) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send({user_id : tmpId, value : result, ok: 1}) //데이터베이스에서 꺼내와야 함
    }
  })
}