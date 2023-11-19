import axios from 'axios'; 
import config from '../config';
import {faker} from '@faker-js/faker'

//контроллер User

export const user = {
    login: function(data) {
        return axios ({
            method: 'post',
            url: config.url + 'Account/v1/Authorized',
            data: data,
            headers: {'Content-Type': 'application/json'},
        })
    },

    create: async function(data){
        return await axios ({
            method: 'post',
            url: config.url + 'Account/v1/User',
            data: data,
            headers: {'Content-Type': 'application/json'},
            validateStatus: function(status) {
                return status <= 500;
            }
        })
    },

    generateToken: async function(data){
        return await axios ({
            method: 'post',
            url: config.url + 'Account/v1/GenerateToken',
            data: data,
            headers: {'Content-Type': 'application/json'},
            validateStatus: function(status) {
                return status <= 500;
            }
        })
    },

    getInfo: async function(data){
        console.log('DATA: ' + JSON.stringify({
            method: 'get',
            url: config.url + 'Account/v1/User/' + data.uuid,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': data.token
            },
            data: data
        }));

        return await axios ({
            method: 'get',
            url: config.url + 'Account/v1/User/' + data.uuid,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': data.token
            },
            data: data
        })
    },

    deleteUser: async function(data){
        return await axios ({
            method: 'delete',
            url: config.url + 'Account/v1/User/' + data.uuid,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': data.token
            },
            data: data
        })

    }
}

export const createRandomUser = async function (){
    return{ 
        userName: faker.internet.userName(),
        password: faker.internet.password({
            length: 15,
            pattern: /[A-Za-z0-9\d@$!%*#?&]/
        })
    }
}