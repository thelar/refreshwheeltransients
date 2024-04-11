require('dotenv').config();
const app = require('express')();
const base = '/refreshwheeltransients';
let status = 'Waiting';

app.get(base, (req, res) => {
    res.send('Hello World! ENV is: ' + process.env.NODE_ENV);
});

app.get(base + '/index', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.post(base + '/status', (req, res) => {
    res.json({
        status: status,
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
