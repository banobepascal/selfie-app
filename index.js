const express = require('express');
const app = express();
const Datastore = require('nedb');

app.listen(3000, () => console.log('listening on 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (req, res, next) => {
    database.find({}, (err, data) => {
        if (err) {
            res.end();
            return;
        }
        res.json(data);
    });
 ;
});

app.post('/api', (req, res, next) => {
    console.log("I got your request");
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    res.json(data);
});