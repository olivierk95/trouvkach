/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import express from "express";
import path from "path";
import mongoose from "mongoose";

const db_login = process.env.MONGO_ATLAS_LOGIN;
const db_password = process.env.MONGO_ATLAS_PASSWORD;

// Database connection : https://cloud.mongodb.com/
mongoose.connect(
    `mongodb+srv://${db_login}:${db_password}@trouvkach-becode-ph6as.mongodb.net/admin`,
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    console.log(
        "----------🚀❤️ 🙉 Connected to MongoDB Atlas 🙉 ❤️🚀----------",
    );
});

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
