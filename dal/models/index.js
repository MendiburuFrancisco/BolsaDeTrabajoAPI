const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const { DB } = require("../../configs/enviroments/");
const config = DB;
const db = {};
// const initModels = require("../helpers/init-models");
const initModels = require("./init-models");
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const models = initModels(sequelize);

Object.keys(models).forEach(modelName => {
  db[modelName] = models[modelName];
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
