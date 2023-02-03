const https = require('axios');

async function getResponse() {
    return await https.get('https://jsonplaceholder.typicode.com/users');
}


export default getResponse;