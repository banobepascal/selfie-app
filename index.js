const express = require('express');
const app = express();

app.listen(3000, () => console.log('listening on 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.post('/api', (req, res, next) => {
    console.log("I got your request");
    console.log(req.body);
    // const data = req.body;
    res.json({
        status: 'Success',
        latitude: req.body.lat,
        longitude: req.body.lon
    });
});