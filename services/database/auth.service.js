// const BaseService = require("./base.service"); 

class AuthService {
    // class AuthService extends BaseService {
    constructor({ UserBusiness }) {
    // constructor({ AuthBusiness, UserBusiness }) {
        // super(AuthBusiness);
    // this._entityBusiness = AuthBusiness;
    this._userBusiness = UserBusiness;

    }

    async login(body) {
        const { email, password } = body;
        const user = await this._userBusiness.getByEmail(email);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        // MODIFICAR PARA QUE VERIFIQUE LA CONTRASEÑA DE OTRA FORMA
        const validPassword = password === user.password;
        // const validPassword = await user.comparePassword(password);
        if (!validPassword) {
            throw new Error("Contraseña incorrecta");
        }
        return user;
    }

    async register(body) {
        const { email, password } = body;
        const user = await this._userBusiness.getByEmail(email);
        
        //  realizar las siguientes validaciones sobre un esquema de usuario
        if(!email || !password) throw new Error('Faltan datos');
        // valido el mail
        if(!email.includes('@')) throw new Error('Email invalido');
        // valido el password
        if(password.length < 8) throw new Error('La contraseña debe tener al menos 8 caracteres');
        
        if (user)  throw new Error('El usuario ya existe');

        
        console.log("Creo el usuario")
        // CREO EL USUARIO
        // const new_user = await this._userBusiness.create(body);
        
        return user;
    }
 

}
module.exports = AuthService;