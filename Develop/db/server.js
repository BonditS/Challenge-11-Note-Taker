const express = require('express')
const path = require('path')
const api = require('./api-routes/apiRoutes.js')

const PORT = process.env.PORT || 3001;

const app = express()

//middleware for parsing JSON and urlencoded form data

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', api)

app.use(express.static('public'))

