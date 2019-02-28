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
import router from "./routes.js";

import bodyParser from "body-parser";

mongoose.connect(
    `mongodb://bestdev:bestdev@trouvkach-becode-shard-00-00-ph6as.mongodb.net:27017/trouvkach?ssl=true&replicaSet=Trouvkach-becode-shard-0&authSource=admin&retryWrites=true`,
);

// mongoose.connect(`mongodb://dev:dev@mongo:27017/trouvkach?authSource=admin`);

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected !!! Yeah !!!");
});

const ports = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use("/api", router);

app.use(bodyParser.json());

app.listen(ports, () =>
    console.log(`🚀 Server is listening on port ${ports}.`),
);

export default db;
