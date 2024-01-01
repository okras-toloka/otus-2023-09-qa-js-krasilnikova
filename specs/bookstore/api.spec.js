// Напишите API тесты на следующие апи ручки (api endpoints)

// Создание книги
// Обновление книги
// Получении информации о книге
// Удаление книги
// При написании АПИ-тестов обязательно использовать контроллеры, так же вынести в конфиг данные для авторизации, базовый УРЛ.


import { user, createRandomUser } from '../helper/user';
import { booksActions } from '../helper/book';

let randomUser, createdUser, uuid, token, books, collection, replace, book, clear;

beforeAll(async () => {
    randomUser = await createRandomUser();
    createdUser = await user.create(randomUser);
    uuid = createdUser.data.userID;
    token = (await user.generateToken(randomUser)).data.token;
    books = await booksActions.getBooks(randomUser);
    collection = await booksActions.addListOfBooks({
        "userId": uuid,
        "collectionOfIsbns": [
          {
            "isbn": books.data.books[0].isbn
          }
        ]
      }, 'Bearer ' + token);
    replace = await booksActions.replaceIsbn({
        "userId": uuid,
        "isbn": books.data.books[1].isbn
    }, 'Bearer ' + token, books.data.books[0].isbn);
    
    book = await booksActions.getBookInfo(books.data.books[0].isbn)

    clear = await booksActions.deleteBook(
        {
            "isbn": books.data.books[1].isbn,
            "userId": uuid
        },  'Bearer ' + token
    )
})



describe('Actions with books', () => {
    test('Добавление книги', async() => {
        const responce = collection
        expect(responce.status).toBe(201)
        expect(responce.data).toHaveProperty('books.0.isbn', books.data.books[0].isbn)
    }),
    test('Повторное добавление книги', async() => {
        let responce = await booksActions.addListOfBooks({
            "userId": uuid,
            "collectionOfIsbns": [
            {
                "isbn": books.data.books[2].isbn
            }
            ]
        }, 'Bearer ' + token);
        responce = await booksActions.addListOfBooks({
            "userId": uuid,
            "collectionOfIsbns": [
            {
                "isbn": books.data.books[2].isbn
            }
            ]
        }, 'Bearer ' + token);
        expect(responce.status).toBe(400) // при повторном добавлении книги ошибка 400
    }),
    test('Обновление книги', async() => {
        const responce = replace;
        expect(responce.status).toBe(200)
        expect(responce.data.books[0].isbn).toBe(books.data.books[1].isbn)
    }),
    test('Получение информации о книге', async() => {
        const responce = book;
        expect(responce.status).toBe(200)
        expect(responce.data).toHaveProperty('isbn')
    }),
    test('Удаление книги', async() => {
        const responce = clear;
        expect(responce.status).toBe(204)
    })
})