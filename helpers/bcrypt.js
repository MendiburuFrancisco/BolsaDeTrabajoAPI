// import bcrypt from 'bcryptjs';
const bcrypt = require('bcrypt');

class BcryptAdapter{
 
    static async hash(value){
        const salt = await bcrypt.genSalt(12);
        return await bcrypt.hash(value, salt);
    }

    static async compare(value, hash){
        return bcrypt.compare(value, hash);
    }
}

module.exports = BcryptAdapter;