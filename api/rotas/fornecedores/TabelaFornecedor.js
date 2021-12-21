const modelo = require('./modeloTabelaFornecedor')
const NaoEncontrado =require('../../erros/NaoEncontrado')

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
        throw new NaoEncontrado() 
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