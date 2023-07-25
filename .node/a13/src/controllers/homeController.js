exports.paginaInicial = (req, res) => {
    console.log('Respondendo ao Cliente')
    res.render('index');
}
exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}