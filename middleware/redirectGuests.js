module.exports = function(req, res, next){
    if(!res.user){
        res.redirect('/login');
        return;
    }

    next();
}