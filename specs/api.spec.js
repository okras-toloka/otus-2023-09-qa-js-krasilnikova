// Напишите 5 апи-тестов на сервис bookstore
// https://bookstore.demoqa.com/swagger/
// Напишите АПИ-тесты:

// Создание пользователя c ошибкой, логин уже используется
// Создание пользователя c ошибкой, пароль не подходит
// Создание пользователя успешно
// Генерация токена c ошибкой
// Генерация токена успешно

import axios from 'axios';
import {faker} from '@faker-js/faker'

async function createUser(userName, password){
    const responce = await axios ({
        method: 'post',
        url: 'https://bookstore.demoqa.com/Account/v1/User',
        data: {
            userName: userName,
            password: password
        },
        headers: {'Content-Type': 'application/json'},
        validateStatus: function(status) {
            return status <= 500;
        }
    })
    return responce
}

async function generateToken(userName, password){
    const token = await axios ({
        method: 'post',
        url: 'https://bookstore.demoqa.com/Account/v1/GenerateToken',
        data: {
            userName: userName,
            password: password
        },
        headers: {'Content-Type': 'application/json'},
        validateStatus: function(status) {
            return status <= 500;
        }
    })
    return token
}

async function createRandomUser(){
    return{ 
        userName: faker.internet.userName(),
        password: faker.internet.password({
            length: 9,
            pattern: /[A-Za-z0-9\d@$!%*#?&]/
        })
    }
}

describe('homework tests', () => {
    const login = 'krol';
    const password = 'Passw0rd!'
    const wrongPassword = 'password'
    test('Создание пользователя c ошибкой, логин уже используется', async () => {
        const responce = await createUser(login, password);
        expect(responce.status).toBe(406)
        expect(responce.data.code).toBe('1204')
        expect(responce.data.message).toBe('User exists!')
    }),
    test('Создание пользователя c ошибкой, пароль не подходит', async() => {
        const responce = await createUser(login, wrongPassword)
        expect(responce.status).toBe(400)
        expect(responce.data.code).toBe('1300')
        expect(responce.data.message).toBe("Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer.")

    }),
    test('Создание пользователя успешно', async () => {
        let user = await createRandomUser()
        console.log(user)
        const responce = await createUser(user.userName, user.password)
        expect(responce.status).toBe(201)
    }),
    test('Генерация токена успешно', async () => {
        const responce = await generateToken(login, password)
        expect(responce.status).toBe(200)
        expect(responce.data.status).toBe('Success')
        expect(responce.data.token).not.toBeNull()
    }),
    test('Генерация токена c ошибкой', async () => {
        const responce = await generateToken(login, wrongPassword)
        expect(responce.status).toBe(200)
        expect(responce.data.status).toBe('Failed')
        expect(responce.data.token).toBeNull()
    })
})