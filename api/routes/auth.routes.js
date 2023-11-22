const { Router } = require('express');
const BaseRoutes  = require('./base.routes'); 

module.exports  =  function( { AuthController } ) {
    // module.exports  =  function( { AuthController, AuthRegisterController } ) {
    const router = Router();
    
    router.post('/login', AuthController.login.bind(AuthController));
    // router.post('/user/login', AuthController.login.bind(AuthController));
    // router.post('/company/login', AuthController.login.bind(AuthController));
    router.post('/user/register', AuthController.register.bind(AuthController));
    router.post('/company/register', AuthController.registerCompany.bind(AuthController));
    // router.post('/register', AuthRegisterController.create.bind(AuthRegisterController));

    return router
};

 