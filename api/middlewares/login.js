// Middleware para verificar el inicio de sesión
const verificarInicioSesion = (req, res, next) => {
  // Verificar si el usuario ha iniciado sesión
  if (req.usuario) {
    next(); // Pasar al siguiente middleware
  } else {
    res.status(401).json({ mensaje: "Debe iniciar sesión" });
  }
};

module.exports = {
  verificarInicioSesion,
};
