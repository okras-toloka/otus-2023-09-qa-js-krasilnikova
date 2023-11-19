// Напишите 5 апи-тестов на сервис bookstore
// https://bookstore.demoqa.com/swagger/
// Напишите АПИ-тесты:

// Создание пользователя c ошибкой, логин уже используется
// Создание пользователя c ошибкой, пароль не подходит
// Создание пользователя успешно
// Генерация токена c ошибкой
// Генерация токена успешно

import config from '../config';
import { user } from '../helper/user';
import { createRandomUser } from '../helper/user';

describe('homework tests', () => {
    test('Создание пользователя c ошибкой, логин уже используется', async () => {
        const responce = await user.create(config.credentials)
        expect(responce.status).toBe(406)
        expect(responce.data.code).toBe('1204')
        expect(responce.data.message).toBe('User exists!')
    })
    // test('Создание пользователя c ошибкой, пароль не подходит', async() => {
    //     const responce = await user.create({...config.credentials, password: 'passs'})
    //     expect(responce.status).toBe(400)
    //     expect(responce.data.code).toBe('1300')
    //     expect(responce.data.message).toBe("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")

    // }),
    // test('Создание пользователя успешно', async () => {
    //     let randomUser = await createRandomUser()
    //     const responce = await user.create(randomUser)
    //     console.log(randomUser)
    //     expect(responce.status).toBe(201)
    // }),
    // test('Генерация токена успешно', async () => {
    //     const responce = await user.generateToken(config.credentials)
    //     expect(responce.status).toBe(200)
    //     expect(responce.data.status).toBe('Success')
    //     expect(responce.data.token).not.toBeNull()
    // }),
    // test('Генерация токена c ошибкой', async () => {
    //     const responce = await user.generateToken({...config.credentials, password: 'passs'})
    //     expect(responce.status).toBe(200)
    //     expect(responce.data.status).toBe('Failed')
    //     expect(responce.data.token).toBeNull()
    // })
})