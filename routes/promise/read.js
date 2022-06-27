'use strict'

const { readPromiseForSurvey, readPromiseOfPresident } = require('../../model')

module.exports = async function (app, opts) {
  app.get('/', async function (request, reply) {
    const result = await readPromiseForSurvey(this.mongo) // 서버와 DB의 통신
    
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

  app.get('/:id', async function (request, reply) {
    //request.parmas.id 에서 옴
    const result = await readPromiseOfPresident(this.mongo, request.params.id)
    console.log(result)
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
