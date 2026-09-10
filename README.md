# Aula 05 - API de Inventário

## Descrição

Backend RESTful para controle de inventário. Os dados são armazenados temporariamente no arquivo `dados/inventario.json`.

## Tecnologias

- Node.js
- Express
- JavaScript
- JSON
- HTTP/REST

## Instalação

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

## Execução

```bash
npm start
```

O servidor ficará disponível em:

`http://localhost:3000`

## Rotas

| Método | Rota | Função |
|---|---|---|
| GET | `/inventario` | Lista todos os itens |
| GET | `/inventario/:id` | Consulta um item |
| POST | `/inventario` | Cadastra um item |
| PUT | `/inventario/:id` | Atualiza um item |
| DELETE | `/inventario/:id` | Exclui um item |

## POST /inventario

Envie no corpo:

```json
{
  "item": "Notebook Dell",
  "local": "Laboratório 01",
  "dataRegistro": "2026-09-10",
  "valor": 3500.00,
  "patrimonio": "PAT-00125"
}
```

O sistema gera o `id` automaticamente.

## PUT /inventario/1

```json
{
  "item": "Notebook Dell Atualizado",
  "local": "Laboratório 02",
  "dataRegistro": "2026-09-10",
  "valor": 3800.00,
  "patrimonio": "PAT-00125"
}
```

O `id` continua sendo 1.

## DELETE /inventario/1

Remove o item de id 1.

## Códigos HTTP

- `200` - operação realizada com sucesso
- `201` - item criado
- `400` - dados inválidos ou incompletos
- `404` - item não encontrado

## Testes

As rotas podem ser testadas usando Postman, Insomnia ou outra ferramenta de requisições HTTP.
