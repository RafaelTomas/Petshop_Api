const roteador = require('express').Router({mergeParams: true})
const tabela = require('./TabelaProduto')
const Produto = require('./Produtos')

roteador.get('/', async (req, res) => {
    const produtos =  await tabela.listar(req.params.idFornecedor)
    res.send(
        JSON.stringify(produtos)
    )
})

roteador.post('/', async (req, res) =>{
    const idFornecedor = req.params.idFornecedor
    const corpo = req.body
    const dados = Object.assign({}, corpo,{ fornecedor: idFornecedor})
    const produto = new Produto(dados)
    await produto.criar()
    res.status(201)
    res.send(produto)
})

const roteadorReclemacoes = require('./reclamacoes')
roteador.use('/:idProduto/reclamacoes', roteadorReclemacoes)

module.exports = roteador