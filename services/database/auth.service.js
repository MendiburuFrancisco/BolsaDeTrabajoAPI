
class AuthService {
    constructor({ UserBusiness }) {
        this._userBusiness = UserBusiness;
    }

    async login(body) {
        this._userBusiness.validateAuthLogin(body);
        const { email, password } = body;
        const user = await this._userBusiness.getByEmail(email);
        if (!user) throw new Error("Usuario no encontrado");
 
        if (await user.isPasswordValid(password)) return {
            "token": user.getToken()
            }

        throw new Error("Creedenciales incorrectas");
    }

    async register(body) {
        const { email, password } = body;
        const user = await this._userBusiness.getByEmail(email);
        if (user)  throw new Error('El usuario ya existe');
       console.log("Creo el usuario")
        // CREO EL USUARIO
        // const new_user = await this._userBusiness.create(body);
        
        return user;
    }
 

}
module.exports = AuthService;