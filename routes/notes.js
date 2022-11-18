const router = require('express').Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

//get notes from data base

router.get('/', (req, res)=>{
    fs.readFile('./db/db.json', )
})