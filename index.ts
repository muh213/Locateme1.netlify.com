const e = require('express');
const Datastore = require('nedb');
const { response } = require('express');
const express = require('express')
const app = express();
app.listen(3000, () => console.log('listening on port 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('databases.db');
database.loadDatabase();

app.post('/api', (request, response) => {
    console.log('I got a request!');
    console.log(request.body);
    const data = request.body;
    database.insert(data);

    response.json({
        status: 'success',
        lat: 'something',
        long: 'what?'
    })
});