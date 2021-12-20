const { removeAllListeners } = require('nodemon')
const modelo = require('./modeloTabelaFornecedor')


module.exports = {
    listar(){
        return modelo.findAll()
    },

    inserir(fornecedor){
        return modelo.create(fornecedor)
    },

    async pegarPorId (id) {
        const encontrado = await modelo.findOne( {
            where : {
                id: id
            }
        })
    

    if (!encontrado) {
        throw new Error('Fornecedor não encontrado') 
    }

    return encontrado

    },

    atualizar (id, dadosParaAtualizar){
        return modelo.update(
            dadosParaAtualizar,
            {
                where: {id:id}
            }
        )
    },

    remover (id) {
       return modelo.destroy({
           where:{ id: id}
       })
    }

}