const { attributes } = require("structure");
const BcryptAdapter = require("../../helpers/bcrypt");
const JwtAdapter = require("../../helpers/jwt");

// class Usuario extends attributes({
const Usuario = attributes({
  id: {
    type: Number,
    default: 0
  },
  id_role: {
    type: Number,
  },
  avatar: {
    type: String,
    nullable: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  legajo: {
    type: String,
    required: true,
    unique: true,
    regex: /^[0-9]{1,6}$/,
    // validate: {
    //   validator: (value) => { return /^[0-9]{1,6}$/.test(value); },
    //   message: "legajo value is incorrect ",
    // },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    email: true,
    lowerCase: true,
    // validate: {
      // validator: (value) => { return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value); },
      // message: 'La dirección de correo electrónico no es válida'
      // }
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 128,
    // validate: {
    //   validator: function(value) {
    //     return false;
    //     // return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(value);
    //   },
    //   message: 'La password no es válida'
    // }
  },
  verified: {
    type: Boolean,
    default: false,
  },
  remember_token: {
    type: String,
    nullable: true,
  },
  email_verified_at: {
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
})(class Usuario {
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
      id: this.id,
      id_role: this.id_role,
      legajo: this.legajo,
    };
    return JwtAdapter.generateToken(payload, {expiresIn: "1h"});
  }

  isThisYourToken(token) {
    const payload = JwtAdapter.verifyToken(token);
    return payload.legajo === this.legajo;
  }


});

module.exports = Usuario;
