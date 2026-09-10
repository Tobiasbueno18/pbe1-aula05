const fs = require("fs")
const caminho = "./dados/inventario.json"

const lerInventario = () => {
    return JSON.parse(fs.readFileSync(caminho, "utf8"))
}

const salvarInventario = (inventario) => {
    fs.writeFileSync(caminho, JSON.stringify(inventario, null, 2))
}

const listar = (req, res) => {
    const inventario = lerInventario()
    res.status(200).json(inventario)
}

const buscarPorId = (req, res) => {
    const inventario = lerInventario()
    const id = Number(req.params.id)
    const item = inventario.find(item => item.id === id)

    if (!item) {
        return res.status(404).json({ mensagem: "Item não encontrado" })
    }

    res.status(200).json(item)
}

const criar = (req, res) => {
    const inventario = lerInventario()

    if (!req.body.item || !req.body.local || !req.body.dataRegistro ||
        req.body.valor === undefined || !req.body.patrimonio) {
        return res.status(400).json({ mensagem: "Preencha todos os campos" })
    }

    const novoId = inventario.length > 0
        ? Math.max(...inventario.map(item => item.id)) + 1
        : 1

    const novoItem = {
        id: novoId,
        item: req.body.item,
        local: req.body.local,
        dataRegistro: req.body.dataRegistro,
        valor: Number(req.body.valor),
        patrimonio: req.body.patrimonio
    }

    inventario.push(novoItem)
    salvarInventario(inventario)

    res.status(201).json(novoItem)
}

const atualizar = (req, res) => {
    const inventario = lerInventario()
    const id = Number(req.params.id)
    const indice = inventario.findIndex(item => item.id === id)

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Item não encontrado" })
    }

    inventario[indice] = {
        id: id,
        item: req.body.item,
        local: req.body.local,
        dataRegistro: req.body.dataRegistro,
        valor: Number(req.body.valor),
        patrimonio: req.body.patrimonio
    }

    salvarInventario(inventario)

    res.status(200).json(inventario[indice])
}

const excluir = (req, res) => {
    const inventario = lerInventario()
    const id = Number(req.params.id)
    const indice = inventario.findIndex(item => item.id === id)

    if (indice === -1) {
        return res.status(404).json({ mensagem: "Item não encontrado" })
    }

    const itemExcluido = inventario.splice(indice, 1)[0]
    salvarInventario(inventario)

    res.status(200).json({
        mensagem: "Item excluído com sucesso",
        item: itemExcluido
    })
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    excluir
}
