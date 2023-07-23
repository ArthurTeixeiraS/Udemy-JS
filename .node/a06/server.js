const express = require('express')
const app = express()

// CRUD -> CREATE - READ - UPDATE - DELETE
//         POST     GET    PUT      DELETE
// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

app.get('/', (req, res)=>{
     res.send(`
     <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
     </form>
     `)
});

app.post('/', (req, res) =>{
    res.send('Recebi o formulário')
})

app.get('/contato', (req, res) =>{
    res.send('<h1>Obrigado por entrar em contato conosco!</h1>')
})
app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000');
    console.log('Acessar http://localhost:3000/contato');
    console.log('Servidor executando na porta 3000');
})