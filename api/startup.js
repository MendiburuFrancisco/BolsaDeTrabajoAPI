class StartUp {
    constructor ({server}){
        this._server = server;

    }
    async start(){
        await this._server.start();
        // const port = this._server.application.address().port;
        // console.log(`Servidor rodando na porta: ${port}!`);
    }

}

module.exports = StartUp;

