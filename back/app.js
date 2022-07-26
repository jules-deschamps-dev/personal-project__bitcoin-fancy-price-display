const express = require("express");

const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });

const coinsRoutes = require("./routes/routes.coins");

const app = express();

app.use(
  cors({
    origin: [`http://localhost:3000`, `http://localhost:5000`],
    credentials: "true",
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use("/api/coins/bitcoin", coinsRoutes);

module.exports = app;
