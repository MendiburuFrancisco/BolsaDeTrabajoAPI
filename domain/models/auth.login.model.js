const { attributes } = require("structure");
 
const AuthLogin = attributes({
   
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
  }
 
})(class AuthLogin {}

    );


module.exports = AuthLogin;
