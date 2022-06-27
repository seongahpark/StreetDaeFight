'use strict'

const { readAllUserResult, readBestAndWorst, chkAuthorizationHeaders } = require('../../model')

module.exports = async function (app, opts) {
  app.get('/promise', async function (request, reply) {
    //console.log(request.headers.authorization)
    const tmpId = await chkAuthorizationHeaders(request.headers.authorization)
    const result = await readAllUserResult(this.mongo, tmpId) // 서버와 DB의 통신

    if(!result){
      reply
      .code(404) //상태코드 보내는 메소드
      .header('content-type', 'application/json')
      .send({error : "Not Found"})
    }else{
      reply
        .code(200) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send(result) //데이터베이스에서 꺼내와야 함
    }
  })

  app.get('/', async function (request, reply) {
    //request.parmas.id 에서 옴
    const tmpId = await chkAuthorizationHeaders(request.headers.authorization)
    const result = await readBestAndWorst(this.mongo, tmpId)

    if(!result){
      reply
      .code(404) //상태코드 보내는 메소드
      .header('content-type', 'application/json')
      .send({error : "Not Found"})
    }else{
    reply
      .code(200) //상태코드 보내는 메소드
      .header('content-type', 'application/json')
      .send(result) //데이터베이스에서 꺼내와야 함
    }
  })
}
