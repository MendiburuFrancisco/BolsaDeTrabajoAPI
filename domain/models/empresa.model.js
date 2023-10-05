const { attributes } = require("structure");
const BcryptAdapter = require("../../helpers/bcrypt");
const JwtAdapter = require("../../helpers/jwt");

const Empresa = attributes({
  // id: {
  //   type: Number,
  //   default: 0
  // },
    id_rol: {
    type: Number,
    default: 3
  },
  razon_social: {
    type: String,
    required: true,
  },
  cuit: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
    regex: /^[0-9]{1,15}$/,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    email: true,
    lowerCase: true,
 
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 128,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  remember_token: {
    type: String,
    nullable: true,
  },
  verified_at: {
    type: Date,
    nullable: true,
  },
  created_at: {
    type: Date,
    nullable: true,
  },
  updated_At: {
    type: Date,
    nullable: true,
  },
})(class Empresa {
    async isPasswordValid(password) {
    return await BcryptAdapter.compare(password, this.password);
    // return this.password === password;
  }
  // getRefreshToken() {
  //   const payload = {
  //     id_role: this.id_role,
  //     legajo: this.legajo,
  //   };
  //   return JwtAdapter.generateToken(payload, {expiresIn: "1h"});
  // }
  getToken() {
    const payload = {
      name: this.name,
      email: this.email,
    };
    return JwtAdapter.generateToken(payload, {expiresIn: "1h"});
  }

  isThisYourToken(token) {
    const payload = JwtAdapter.verifyToken(token);
    return payload.email === this.email;
  }


});

module.exports = Empresa;
