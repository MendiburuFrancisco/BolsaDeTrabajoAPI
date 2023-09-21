// Adapter: JWT
const jwt = require('jsonwebtoken');
const config = require('../configs/enviroments');

class JwtAdapter {
    // constructor() {
    //     this.config = config;
    // }

    static generateToken(payload, expiresIn) {
        return jwt.sign(payload, config.TOKEN.secret, expiresIn);
    }

    static verifyToken(token) {
        return jwt.verify(token, config.TOKEN.secret);
    }
}

module.exports = JwtAdapter;