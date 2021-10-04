const express = require('express');
const app = express();

const usuarios = [
    {
        id: 1,
        nome: "John"
    },
    {
        id: 2,
        nome: "Mário"
    },
    {
        id: 3,
        nome: "Amanda"
    },
    {
        id: 4,
        nome: "Mariana"
    }
];


app.get('/', (req, res) => {
    res.send(usuarios);
})


const port = 3000;

app.listen(port, () => {
    console.log('Servidor rodando na porta ', port);
});