// Задание 1:

// В файле src/app.js cоздать функцию getScore.
// Функция getScore принимает на вход объект. В котором ключ это ник, а значение это успеваемость.
// Функция getScore возвращает в ответ сумму всех баллов.
// Пример:
// const scores = {
// Anna: 10,
// Olga: 1,
// Ivan: 5,
// }
// getScore(scores); // 16


function getScore (scores) {
    let total = 0
    for (let key in scores) {
        total = total + scores[key]
        //console.log(scores[key])
    }
    return total;
}

const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5
}

console.log(getScore(scores))



