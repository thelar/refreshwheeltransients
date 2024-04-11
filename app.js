require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const base = '/refreshwheeltransients';
let status = 'Waiting';
let log = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

app.post(base + '/command', (req, res) => {
    let command = req.body.action;
    console.log('command ' + command + ' received');
    switch(req.body.action){
        case 'start':
            status = 'Started';
            init();
            break;
        default:
            break;
    }
    res.json({
        status: status,
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

function init() {
    log = [];
}
