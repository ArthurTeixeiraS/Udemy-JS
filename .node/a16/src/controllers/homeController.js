exports.paginaInicial = (req, res) => {
    console.log(req.session.usuario)
    console.log(req.flash('error'), req.flash('success'), req.flash('info'))
    //req flash aparece apenas 1 vez
    res.render('index', {
        titulo: 'Este será o <span style="color:red;">titulo </span> da pagina',
        numeros: [0,1,2,3,4,5,6,7,8,9,10]
    });
}
exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}