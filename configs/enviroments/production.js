module.exports = {
    PORT: process.env.PORT,
    DB : {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        // server: process.env.DB_SERVER,
        database: process.env.DB_NAME,
 
    },
    TOKEN : {
        secret: process.env.TOKEN_SECRET,
        refreshSecret: process.env.TOKEN_REFRESH_SECRET,
    }
}
