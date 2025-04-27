'use strict';
async function createTodo(method,body,headers) {
    try {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const response = await fetch(url, {
        method: method,
        body: body,
        headers: {
            ...headers
        }
        });
        if (response.status !== 201) throw new Error(`Request failed with ${response.status}`);
        const result = await response.json(); 
        if (JSON.parse(body).title !== result.title || JSON.parse(body).completed !== result.completed || JSON.parse(body).userId !== result.userId) throw new Error(`Request failed with ${response.status}`);
    } catch (err) {
        console.error(err.message);
}
await console.log('Work of function is done');
}
createTodo('POST', JSON.stringify({title: 'My todo', completed: false, userId: 1,}), {'Content-type': 'application/json; charset=UTF-8'});