'use strict'

const { createUserRes, readAllUserResult, chkAuthorizationHeaders } = require('../../model')

module.exports = async function (app, opts) {
  app.put('/', async function (request, reply) {
    const tmpId = await chkAuthorizationHeaders(request.headers.authorization)
    const result = await createUserRes(this.mongo, tmpId, request.body)

    if(!result){
      reply
        .code(404) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send({error : "Not Found"})
    }else{
      reply
        .code(200) //상태코드 보내는 메소드
        .header('Content-Type', 'application/json')
        .send({value : result.value, ok : result.ok})
    }
  })
}
