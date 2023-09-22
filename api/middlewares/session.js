const JwtAdapter = require("../../helpers/jwt");

const getRole = (req) => {
  try {
    const decodedRequest = JwtAdapter.decodeToken(req.body.token);
    console.log(decodedRequest)
    const id_role = decodedRequest.id_role;

    switch (id_role) {
      case 1:
        return "admin";
      case 2:
        return "alumno";
      case 3:
        return "empresa";
      default:
        return false;
    }
  } catch (error) {
    throw new Error("No existe el rol");
  }
};

const verificarInicioSesion = (req, res, next) => {
  try{
    if (JwtAdapter.verifyToken(req.body.token)) next(); // Pasar al siguiente middleware
  }catch(error){
    res.status(401).json({ mensaje: "Debe iniciar sesión" }); 
  }
};


const esUsuario = (req, res, next,role) => {
  if (getRole(req)== role) {
    next();
  }else{
    res.status(402).json({ mensaje: "No tiene permisos para realizar esta acción" });
  }
}

const esAdmin = (req, res, next) => esUsuario(req,res,next,"admin");
const esAlumno = (req, res, next) => esUsuario(req,res,next,"alumno");
const esEmpresa = (req, res, next) => esUsuario(req,res,next,"empresa");
const esAlumnoEmpresa = (req, res, next) => esUsuario(req,res,next,"alumno") || esUsuario(req,res,next,"empresa");




module.exports = {
  verificarInicioSesion,
  esAdmin,
  esAlumno,
  esEmpresa,
};
