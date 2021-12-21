const express = require('express')
const bodyparser = require('body-parser')
const config = require('config')
const NaoEncontrado = require('./erros/NaoEncontrado')
const app = express()

app.use(bodyparser.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.use((erro, req, res, next) => {
    
    if(erro instanceof NaoEncontrado){
        res.status(404)
    }else{
        res.status(400)
    }
    res.send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
        })
    )
})

app.listen(config.get('api.porta'), () => console.log("Abestando Funciona!!") )