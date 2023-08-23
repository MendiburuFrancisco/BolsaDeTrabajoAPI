module.exports = {
    PORT: process.env.PORT,
    DB : {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: "localhost",
        dialect: "mongodb",
        database: process.env.DB_NAME,
 
    },
    SCRAPPER : {
        url: "https://www.frro.utn.edu.ar/academica/oferta/",
        url_login: "https://bolsadetrabajo.frro.utn.edu.ar/postulante/inicioSesion.aspx",
        user: process.env.SCRAP_USER,
        password: process.env.SCRAP_PASSWORD,
        clave: process.env.SCRAP_CLAVE,

    }
}
