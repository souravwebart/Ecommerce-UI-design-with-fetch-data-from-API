require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn.js");
const products = require("./models/productSchema");
const cors = require("cors");
const router = require("./routes/router.js");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json("server start")
})

app.use(router);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});