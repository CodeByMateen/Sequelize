import express from "express";
import bodyParser from "body-parser";
import db from "./config/db.config.js"

const app = express();
app.use(bodyParser.json());

db.sequelize.sync();

app.listen(8080, () => {
  console.log("server is running");
});