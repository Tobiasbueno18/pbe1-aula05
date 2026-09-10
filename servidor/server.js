const express = require("express")
const inventarioService = require("./inventario.service")

const app = express()

app.use(express.json())

app.get("/inventario", inventarioService.listar)
app.get("/inventario/:id", inventarioService.buscarPorId)
app.post("/inventario", inventarioService.criar)
app.put("/inventario/:id", inventarioService.atualizar)
app.delete("/inventario/:id", inventarioService.excluir)

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})
