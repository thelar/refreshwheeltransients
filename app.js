require('dotenv').config();
const app = require('express')();

app.get('/refreshwheeltransients', (req, res) => {
    res.send('Hello World! ENV is: ' + process.env.NODE_ENV);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
