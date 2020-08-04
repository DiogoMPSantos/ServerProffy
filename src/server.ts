import express from 'express';

const app = express();

app.get('/users', (request, response)=>{
    const users = [
        {name: 'Diogo', age: 23},
        {name: 'Adilson', age: 27}
    ];
    return response.json(users);
});


app.listen(3333);