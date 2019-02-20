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
import bank from "./routes/bank";

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_ATLAS_LOGIN}:${
        process.env.MONGO_ATLAS_PWD
    }@trouvkach-becode-ph6as.mongodb.net/test?retryWrites=true`,
);

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected !!! Yeah !!!");
});

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.use("/api/bank", bank);

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

// app.use((req, res, next) => {
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "X-Requested-With,content-type",
//     );
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, OPTIONS, PUT, PATCH, DELETE",
//     );
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     next();
// });
