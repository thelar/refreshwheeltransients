require('dotenv').config();
const app = require('express')();
const base = '/refreshwheeltransients';

app.get(base, (req, res) => {
    res.send('Hello World! ENV is: ' + process.env.NODE_ENV);
});

app.get(base + '/index', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
