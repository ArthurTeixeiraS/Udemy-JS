const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Um título qualquer',
    descricao: 'Lorem ipsum dolor sit amet'
}).then(dados => console.log(dados))
.catch(e=> console.log(e)) 

HomeModel.find()
.then(dados => console.log(dados))
.catch(e=> console.log(e))

exports.paginaInicial = (req, res) => {
    console.log('Respondendo ao Cliente')
    res.render('index');
}
exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}