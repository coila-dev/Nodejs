//ARCHIVO GENERAL PARA MANEJAR LAS RUTAS
const indexRouter = require('../app/routes/indexRoutes');
const usuarioRoute = require('../app/routes/usuariosRoutes');
exports.init = (app) => {
    //registrando midleware
    app.use('/', indexRouter);
    app.use('/usuarios', usuarioRoute);
};