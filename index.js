const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json())
app.use(bodyParser.json());


app.use(cors({
    origin:'*'
}));

app.use(express.static('public'));


app.get('/', (req, res) => { res.send('olá,mundo!');
});

app.get('/sobre', (req, res) => { res.send('Esta é a página sobre');
});

app.get('/tarefas', (req, res) => { 
    const tarefas = require('./public/tarefas.json');
    res.json(tarefas);
});

app.post('/novaTarefa', (req, res) => { 
    console.log(req.body);
    res.send({"message" : "A requisição POST para novaTarefa chegou:" + req.body.descricao});
});

app.listen(3000, ()=>{
    console.log('servidor rodando em http://localhost:3000');
});