const { Sequelize, DataTypes } = require('sequelize');

// Koneksi ke database dari environment variable
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.landing = require('./landing.model.js')(sequelize, DataTypes);
db.project = require('./project.model.js')(sequelize, Sequelize);
db.article = require('./article.model')(sequelize, Sequelize);
db.contact = require('./contact.model')(sequelize, Sequelize);

module.exports = db;
