import axios from 'axios'; 
import config from '../config';

export const booksActions = {
    getBooks: async function(data){
        return axios ({
            method: 'get',
            url: config.url + 'BookStore/v1/Books',
            data: data,
            headers: {'Content-Type': 'application/json'}
        })
    },

    addListOfBooks: async function(data, token){
        return axios ({
            method: 'post',
            url: config.url + 'BookStore/v1/Books',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            data: data,
            validateStatus: function(status) {
                return status <= 500;
            }
        });
    },

    replaceIsbn: async function(data, token, oldIsbn){
        return axios ({
            method: 'put',
            url: config.url + 'BookStore/v1/Books/' + oldIsbn,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            data: data
        }); 
    },

    getBookInfo: async function(data, token){
        return axios ({
            method: 'get',
            url: config.url + 'BookStore/v1/Book?ISBN=' + data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }); 
    },

    deleteBook: async function(data, token){
        return axios ({
            method: 'delete',
            url: config.url + 'BookStore/v1/Book',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            data: data
        }); 
    }

}
