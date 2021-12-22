class valorNaoSuportado extends Error {
    constructor (contentType) {
        super(`O tipo de conteúdo ${contentType} não é suportado`)
        this.name = 'valorNaoSuportado'
        this.idErri = 3
    }
}

module.exports = valorNaoSuportado