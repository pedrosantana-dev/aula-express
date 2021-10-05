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

app.use(express.json());

app.get('/usuarios', (req, res) => {
    res.send(usuarios);
});

app.post('/usuarios/adicionar', (req, res) => {
    usuarios.push(req.body);

    res.send(usuarios);
});

app.put('/usuarios/:id', (req, res) => {
    let usuario = usuarios.find(u => u.id == req.params.id);
    usuario.nome = req.body.nome

    res.send(usuarios);
});

app.delete('/usuarios/:id', (req, res) => {
    let i = usuarios.findIndex(u => u.id == req.params.id);
    usuarios.splice(i, 1);
    res.send(usuarios);
})


const port = 3000;

app.listen(port, () => {
    console.log('Servidor rodando na porta ', port);
});