
import { hello } from './module.js'
import { func } from './module.js'

hello('1')
hello('2')
hello('3')
func('test')

let isCondition = true
let otherCondition = 0
if (isCondition === otherCondition) {
    console.log('true', isCondition)
} else {
    console.log('false', isCondition)
}


let usermane = 'test'
console.log("username", usermane)
usermane = '123'
console.log("username", usermane)
usermane = undefined
console.log("username", usermane)
usermane = null
console.log("username", usermane)