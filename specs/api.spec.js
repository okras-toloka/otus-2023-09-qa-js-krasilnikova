// Напишите 5 апи-тестов на сервис bookstore
// https://bookstore.demoqa.com/swagger/
// Напишите АПИ-тесты:

// Создание пользователя c ошибкой, логин уже используется
// Создание пользователя c ошибкой, пароль не подходит
// Создание пользователя успешно
// Генерация токена c ошибкой
// Генерация токена успешно

//import fetch from 'node-fetch';

async function createUser(userName, password){
    const responce = await fetch ('https://bookstore.demoqa.com/Account/v1/User', {
        method: 'POST', 
        body: JSON.stringify({
            'userName': userName,
            'password': password,
        }),
        headers: {'Content-Type': 'application/json'} 
    })
    return responce
}

describe('homework tests', () => {
    test('Создание пользователя c ошибкой, логин уже используется', async () => {
        
        const responce = await createUser('krol', 'Passw0rd!')
        const data = await responce.json()
        expect(responce.status).toBe(406)
        expect(data.code).toBe('1204')
        expext(data.message).toBe('User exists!')
    })
})