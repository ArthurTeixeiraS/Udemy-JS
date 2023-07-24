const express = require('express')
const app = express()

// CRUD -> CREATE - READ - UPDATE - DELETE
//         POST     GET    PUT      DELETE
// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre


//http://facebook.com/profiles/12345?campanha=googleads&nome_campanha=seila
//                                    query-strings
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res)=>{
     res.send(`
     <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar Formulário</button>
     </form>
     `)
});

app.get('/testes/:idUsuarios?', (req, res)=>{
    // /profiles/3 <- URL param
    // /profiles/?id=3 <- Query Params
    console.log(req.params)
    console.log(req.query)
    res.send(req.query.facebookprofile)
})

app.post('/', (req, res) =>{
    console.log(req.body)
    res.send(`O que voce me mandou foi: ${req.body.nome}`)
})

app.get('/contato', (req, res) =>{
    res.send('<h1>Obrigado por entrar em contato conosco!</h1>')
})
app.listen(3000, ()=>{
    console.log('Acessar http://localhost:3000');
    console.log('Acessar http://localhost:3000/contato');
    console.log('Servidor executando na porta 3000');
})