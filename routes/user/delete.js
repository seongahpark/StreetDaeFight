'use strict'

const { deleteOne, deleteUserPromise, chkAuthorizationHeaders } = require('../../model')

module.exports = async function (app, opts) {
  app.delete('/', async function (request, reply) {
    const tmpId = await chkAuthorizationHeaders(request.headers.authorization)
    const result = await deleteOne(this.mongo, tmpId)
    const resultOfUserPromise = await deleteUserPromise(this.mongo, tmpId)
    console.log(result)
    if(!result.value && !resultOfUserPromise){
      reply
        .code(204)
        .header('content-type', 'application/json')
        .send({value : result.value, ok : result.ok})
    }
    else {
      reply
        .code(200) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send({value : result.value, ok : result.ok}) //데이터베이스에서 꺼내와야 함
    }
  })

  app.delete('/promise', async function (request, reply) {
    const tmpId = await chkAuthorizationHeaders(request.headers.authorization)
    const resultOfUserPromise = await deleteUserPromise(this.mongo, tmpId)
    console.log(resultOfUserPromise)
    if(resultOfUserPromise.deletedCount === 0){
      reply
        .code(404)
        .header('content-type', 'application/json')
        .send({error : "Not Found"})
    }
    else {
      reply
        .code(200) //상태코드 보내는 메소드
        .header('content-type', 'application/json')
        .send({user_id : tmpId, result : resultOfUserPromise})
    }
  })
}
