const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./dist/murmurChallenge'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/murmurChallenge/index.html'));
});

app.listen(process.env.PORT || 8080);