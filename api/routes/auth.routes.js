const { Router } = require('express');
const BaseRoutes  = require('./base.routes'); 

module.exports  =  function( { AuthLoginController } ) {
    // module.exports  =  function( { AuthLoginController, AuthRegisterController } ) {
    const router = Router();
    
    router.post('/login', AuthLoginController.login.bind(AuthLoginController));
    // router.post('/register', AuthRegisterController.create.bind(AuthRegisterController));

    return router
};

 