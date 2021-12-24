const Modelo = require('./ModeloTabelaProdutos')

module.exports = {
    listar (idFornecedor) {
        return Modelo.findAll({
            where:{
                fornecedor: idFornecedor
            }
        })
    }
}