const CustomError = require("../../helpers/custom.error");


class AuthService {
    // constructor({ UserBusiness }) {
    constructor({ UserBusiness, CompanyBusiness }) {
        this._userBusiness = UserBusiness;
        this._companyBusiness = CompanyBusiness;
    }

    async login(body) {
        this._userBusiness.validateAuthLogin(body);
        const { email, password } = body;
        const user = await this._userBusiness.getByEmail(email);
        if (!user) throw  CustomError.badRequest("El usuario no existe");
 
        if (await user.isPasswordValid(password)) return {
            "token": user.getToken()
            }

        throw CustomError.badRequest("Creedenciales incorrectas");
    }

    async register(body) {
        const { email, password } = body;
        const user = await this._userBusiness.getByEmail(email);
        if (user)  throw new Error('El usuario ya existe');
    //    console.log("Creo el usuario")
        // const new_user = await this._userBusiness.create(body);
        
        return new_user;
    }

    async registerCompany(body) {
        const { 
            email  
         } = body;
         console.log(body)
        const company = await this._companyBusiness.getByEmail(email);
        if (company)  throw new Error('El usuario ya existe');

        // body.id_rol = "3";
        console.log(body)
        const new_company = await this._companyBusiness.create(body);
        
        
        return new_company;
    }
 

}
module.exports = AuthService;