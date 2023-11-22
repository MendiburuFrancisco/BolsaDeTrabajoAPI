module.exports = {
    PORT: process.env.PORT,
    DB : {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        dialect: "mysql",
        database: process.env.DB_NAME,
 
    },
    SCRAPPER : {
        url: "https://www.frro.utn.edu.ar/academica/oferta/",
        url_login: "https://bolsadetrabajo.frro.utn.edu.ar/postulante/inicioSesion.aspx",
        user: process.env.SCRAP_USER,
        password: process.env.SCRAP_PASS,
        clave: process.env.SCRAP_USERTYPE,

    },
    TOKEN : {
        secret: process.env.TOKEN_SECRET,
        refreshSecret: process.env.TOKEN_REFRESH_SECRET,
    }
}
