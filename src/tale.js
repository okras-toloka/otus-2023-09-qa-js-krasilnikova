// Задание 1

function kolobok(name) {
    if (name == 'дедушка') {
        console.log('Я от дедушки ушел')
    } else if (name == 'заяц') {
        console.log('Я от зайца ушел')
    } else if (name == 'лиса') {
        console.log('А от лисы не ушел')
    } else {
        console.log('Я не знаю такого персонажа')
    }
};

function switchKolobok(name) {
    switch (name) {
        case 'дедушка': 
            console.log('Я от дедушки ушел')
            break
        case 'заяц': 
            console.log('Я от зайца ушел')
            break
        case 'лиса': 
            console.log('А от лисы не ушел')
            break
        default: 
            console.log('Я не знаю такого персонажа')
            break
    }       
}


let name = 'дедушка'
kolobok(name)
switchKolobok(name)
console.log('-------')

name = 'лиса'
kolobok(name)
switchKolobok(name)
console.log('-------')

name = '132'
kolobok(name)
switchKolobok(name)
console.log('-------')


// Задание 2

function newYear(who) {
    console.log(`${who}! ${who}! ${who}!`)
}

let who = 'Снегурочка'
newYear(who)
console.log('-------')

who = 'Дед Мороз'
newYear(who)
console.log('-------')
