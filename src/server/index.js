/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import express from "express";
import path from "path";
import router from "./routes/terminal";

// Body Parser
const bodyParser = require("body-parser");

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

// Connection à la base de donnée
const mongoose = require("mongoose");

const uri = "mongodb://mongo/trouvkach";
const connOptions = {
    useNewUrlParser: true,
    authsource: "admin",
    user: "dev",
    pass: "dev",
};

mongoose
    .connect(uri, connOptions)
    .then(() => console.log("connected"))
    .catch(err => console.log(err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    console.log("connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use("/api", router);

module.exports = db;
