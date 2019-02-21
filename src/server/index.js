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
import router from "./routes/routes";

import bodyParser from "body-parser";

mongoose.connect(
    `mongodb://bestdev:bestdev@trouvkach-becode-shard-00-00-ph6as.mongodb.net:27017/trouvkach?ssl=true&replicaSet=Trouvkach-becode-shard-0&authSource=admin&retryWrites=true`,
);

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected !!! Yeah !!!");
});

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use("/api", router);

app.use(bodyParser.json());

// app.get("/hello", (req, res) => {
//     console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
//     res.send("Hello, World!");
// });

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

// app.get('/', (req, res) => {
//     var results = db.collection('banks').find({})
//     console.log(results);
//     res.send({results: results});
// });

export default db;
