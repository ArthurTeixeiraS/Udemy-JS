require('dotenv').config(); //Variaveis de ambiente (.env)

const express = require('express'); //express
const app = express(); //iniciando o app do express

const mongoose = require('mongoose'); //modela nossa base de dado
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto'); //emite uma response dizendo que o app está pronto para execução
  })
  .catch(e => console.log(e));

const session = require('express-session'); //identificando navegadores (cookies)
const MongoStore = require('connect-mongo'); //Sessoes serão salvas em DB
const flash = require('connect-flash'); //Flash-messages (somem)
const routes = require('./routes'); //rotas que vem do routes
const path = require('path'); //trabalhando com caminhos
const helmet = require('helmet'); //segurança
const csrf = require('csurf'); //gera csrf token, impossibilitando sites externos de dar Post nos sites
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
// middlewares -> executam funções antes, durante ou depois da requisição ser devolvida

app.use(helmet());

app.use(express.urlencoded({ extended: true })); //posta formulários pra dentro da aplicação
app.use(express.json()); //permite o servidor ler JSON
app.use(express.static(path.resolve(__dirname, 'public'))); //artquivos estáticos, podem acessados daqui (img, css, js)

const sessionOptions = session({ //configurações de sessão
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); //arquivos que serão renderizados
app.set('view engine', 'ejs'); //engine usada para renderizar esse html

app.use(csrf()); //chamando o csrf token
// Nossos próprios middlewares
app.use(middlewareGlobal); // chamndo nossos middlewares
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes); //chamando nossas rotas

app.on('pronto', () => {
  app.listen(3000, () => { //abrindo o servidor na porta 3000
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
