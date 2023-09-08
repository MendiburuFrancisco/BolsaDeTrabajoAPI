const { Router } = require('express');
 
class BaseRoutes {
  constructor({ Controller }) {
    this.router = Router();
    this.Controller = Controller;
    this.setupRoutes();
  }
  
  setupRoutes() {
    this.router.get('/', this.Controller.getAll.bind(this.Controller));
    this.router.post('/', this.Controller.create.bind(this.Controller));
    this.router.get('/:id', this.Controller.get.bind(this.Controller));
    // this.router.put('/:id', this.Controller.update.bind(this.Controller));
    // this.router.delete('/:id', this.Controller.delete.bind(this.Controller));
  }
  
  getRouter() {
    return this.router;
  }
}

module.exports = BaseRoutes;

 