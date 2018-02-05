'Use Strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const moment = require('moment');

app.use(cors());

app.use(bodyParser.json());

config = {
    SERVER_PORT: 5000,
    DS_KEY: 'cedba224531c8bdebd8ddc86f57a1fcf',
    DS_ROOT: 'https://api.darksky.net/forecast',
    DS_URI: `${this.DS_ROOT}/${this.DS_KEY}`
};

app.get('/api/app/moment', (req, res) => {
    res.status(200).json(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
});


app.listen(5000, () => console.log('Example app listening on port 5000!'))