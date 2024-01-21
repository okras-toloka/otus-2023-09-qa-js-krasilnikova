import {faker} from '@faker-js/faker'

export const createUser = function (){
    return { 
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password({
            length: 7
        })
    }
}