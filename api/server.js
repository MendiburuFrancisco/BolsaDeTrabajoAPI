const express = require('express');


class Server {
    constructor({config,router}){
        this._config = config;
        this._express = express();
        this._express.use(router);
        
    }

    start(){
        return new Promise((resolve,reject)=>{

            // this._express.use(this._router);
            const http = this._express.listen(this._config.PORT,()=>{
                const {port} = http.address();
                console.log(`API FRRO running on port ${port} 🚀`);
                resolve();
            });
        })
    }
}

module.exports = Server;