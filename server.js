'use strict';

const pg = require('pg');
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const app = express();

const conString = process.env.CLIENT_URL
const client = new pg.Client(conString)
client.connect()
client.on('error', err => console.error(err))

app.listen(PORT, () => console.log(`Servin' up some goodness on port ${PORT}!`))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.static('./public'))

// app.get('/new', (req, res) => res.sendFile('new.html', {root: './public'}))
