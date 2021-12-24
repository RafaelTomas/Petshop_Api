const roteador = require('express').Router({mergeParams: true})
const tabela = require('./TabelaProduto')

roteador.get('/', async (req, res) => {
    const produtos =  await tabela.listar(req.params.idFornecedor)
    res.send(
        JSON.stringify(produtos)
    )
})


module.exports = roteador