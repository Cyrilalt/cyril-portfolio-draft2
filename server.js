
const express = require('express');
const app = express();
// const enforce = require('express-sslify');
// app.use(enforce.HTTPS({trustProtoHeader: true}));
const bodyParser = require('body-parser');

app.use(express.static("public"));

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html');
});

app.get('/lost', (req, res)=> {
    res.sendFile(__dirname + '/404.html');
});

app.get('*', (req, res)=> {
    res.redirect('/lost');
});

let port = process.env.PORT || 4000;

app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port ' + port)
});