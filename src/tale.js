// Задание 1

function kolobok(name) {
    if (name == 'дедушка') {
        return'Я от дедушки ушел'
    } else if (name == 'заяц') {
        return'Я от зайца ушел'
    } else if (name == 'лиса') {
        return'А от лисы не ушел'
    } else {
        return'Я не знаю такого персонажа'
    }
};

function switchKolobok(name) {
    switch (name) {
        case 'дедушка': 
            return'Я от дедушки ушел'
            break
        case 'заяц': 
            return 'Я от зайца ушел'
            break
        case 'лиса': 
            return 'А от лисы не ушел'
            break
        default: 
            return'Я не знаю такого персонажа'
            break
    }       
}

let hero = 'дедушка'

let response = kolobok(hero)
let newresponser = switchKolobok(hero)

console.log(`${response} + ${newresponser}`)
console.log('-------')


hero = 'лиса'
response = kolobok(hero)
newresponser = switchKolobok(hero)

console.log(`${response} + ${newresponser}`)
console.log('-------')

hero = '123'
response = kolobok(hero)
newresponser = switchKolobok(hero)

console.log(`${response} + ${newresponser}`)
console.log('-------')


// Задание 2

function newYear(who) {
    return `${who}! ${who}! ${who}!`
}

let cheer = newYear('Снегурочка')
console.log(cheer)
console.log('-------')

cheer = newYear('Дед Мороз')
console.log(cheer)
console.log('-------')
