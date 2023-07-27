exports.paginaInicial = (req, res) => {
    console.log(req.session.usuario)
    console.log(req.flash('error'), req.flash('success'), req.flash('info'))
    //req flash aparece apenas 1 vez
    res.render('index');
}
exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}