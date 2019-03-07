'use strict'

const express = require('@feathersjs/express')
const feathers = require('@feathersjs/feathers')

const app = express(feathers())

app.use('/', function (req, res) {
  console.log('')
  console.log(req['url'])
  console.log(req['headers']['user-agent'])
  res.status(200).send('hello world')
})

app.listen(8004)

console.log('server is running on "http://localhost:8004/"')
