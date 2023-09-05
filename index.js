 const container = require('./api/container');

 const application = container.resolve('app');
 const db = container.resolve('db');

 application
    .start()
    .then(
        async() => {
            // console.log("Application running on port: ", application.getPort());
            await db.sequelize.sync({force: false});
        }
    )
 
    .catch(err => {
        console.log(err);
        process.exit();
    }
);

