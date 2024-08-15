import { Sequelize } from "sequelize";
import userModel from "../models/user.model.js";

const dbName = "mateen_db";
const dbUser = "root";
const dbPassword = "admin";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: console.log,
});

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = userModel(sequelize, Sequelize);

export default db;
