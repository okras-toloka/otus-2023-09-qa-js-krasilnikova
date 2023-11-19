// Вариант 1:
// Напишите API тесты на следующие апи ручки (api endpoints)

// Авторизация
// Удаление пользователя
// Получение информации о пользователе
// При написании АПИ-тестов обязательно использовать контроллеры, так же вынести в конфиг данные для авторизации, базовый УРЛ.
// Будет плюсом, если так же вы отрефакторите тесты написанные в рамках ДЗ АПИ тесты

import { user, createRandomUser } from '../helper/user';

let randomUser;
let createdUser;
let uuid;
let token

beforeAll(async () => {
    randomUser = await createRandomUser();
    createdUser = await user.create(randomUser);
    uuid = createdUser.data.userID;
    token = (await user.generateToken(randomUser)).data.token;
})

describe('homework API tests with contrillers', () => {
    test('Создание рандомного пользователя', async() => {
        const responce = createdUser
        expect(responce.status).toBe(201)
    }),
    test('Авторизация', async() => {
        const responce = await user.login(randomUser)
        expect(responce.status).toBe(200)
    })
    test('Получение информации о пользователе', async () => {
        const responce = (await user.getInfo({uuid: uuid, token: 'Bearer ' + token, data: randomUser}));
        expect(responce.status).toBe(200)
    })
    test('Удаление пользователя', async () => {
        const responce = (await user.deleteUser({uuid: uuid, token: 'Bearer ' + token, data: randomUser}));
        expect(responce.status).toBe(204)
    })
});