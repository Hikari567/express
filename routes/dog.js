import request from 'request';
const url = 'https://dog.ceo/api/breeds/image/random';

const method = 'GET';
const options = {
    url: url,
    method: method,
};

export const handler = (event) => {
    request(options, function (error, response, body) {
        console.log(body);
    });  
};