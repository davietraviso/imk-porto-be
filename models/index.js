const dbConfig = require('../config/db.config.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.landing = require('./landing.model.js')(sequelize, DataTypes);
db.project = require('./project.model.js')(sequelize, Sequelize);
db.article = require("./article.model")(sequelize, Sequelize);
db.contact = require("./contact.model")(sequelize, Sequelize);


module.exports = db;
