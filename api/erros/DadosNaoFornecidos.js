class DadosNaoFornecidos extends Error {
    constructor (){
        super('Não foram fornecidos dados para atualizar!')
        this.name = 'Dados não fornecidos'
        this.idErro = 2
    }
}

module.exports = DadosNaoFornecidos