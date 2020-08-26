const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "127.0.0.1",
  port: 3306,
  database: "mydb",
  username: "root",
  password: "root",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;