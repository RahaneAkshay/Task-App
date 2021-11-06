import request from 'supertest'
import {app} from '../index'

const user:Object= {

}
test('create user test case',async()=>{
await request(app).get('/user/fetch').expect(200)
})


test('login user test case',async()=>{
    await request(app).post('/user/login').send({
        email:"jay@test.com",
        password:"pass123"
    }).expect(200)
    })