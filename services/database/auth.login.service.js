// const BaseService = require("./base.service"); 

class AuthLoginService {
    // class AuthLoginService extends BaseService {
    constructor({ UserBusiness }) {
    // constructor({ AuthLoginBusiness, UserBusiness }) {
        // super(AuthLoginBusiness);
    // this._entityBusiness = AuthLoginBusiness;
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
 

}
module.exports = AuthLoginService;