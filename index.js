const express = require('express');
const app = express();

app.listen(3000, () => console.log('listening on 3000'));
app.use(express.static('public'));

app.post('/api', (req, res, next) => {
    console.log("I got your request");
    console.log(req.body);
});