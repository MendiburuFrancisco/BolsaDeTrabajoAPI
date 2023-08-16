module.exports = {
    PORT: process.env.PORT,
    DB : {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: "localhost",
        dialect: "mongodb",
        database: DB_NAME,
 
    },
    SCRAPPER : {
        url: "https://www.frro.utn.edu.ar/academica/oferta/",
        user: SCRAP_USER,
        password: SCRAP_PASSWORD,
        clave: SCRAP_CLAVE,

    }
}
