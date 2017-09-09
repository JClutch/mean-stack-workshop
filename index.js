const express = require('express')
const path = require('path')
const parser = require('body-parser')
const router = require('./routes')
const db = require('./db')

const app = express()

app.use(parser.json())

app.use('/scripts', express.static(path.resolve(__dirname, './node_modules')))
app.use(express.static(path.resolve(__dirname, './public')))
app.use('/api', router)

app.listen(3000)
console.log('Link List running on :3000');
