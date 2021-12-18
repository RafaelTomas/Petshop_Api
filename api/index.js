const express = require('express')
const bodyparser = require('body-parser')
const config = require('config')

const app = express()

app.use(bodyparser.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.listen(config.get('api.porta'), () => console.log("Abestando Funciona!!") )