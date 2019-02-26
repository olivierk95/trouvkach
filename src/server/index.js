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
    `mongodb://${process.env.MONGO_ATLAS_LOGIN}:${process.env.MONGO_ATLAS_PWD}@trouvkach-becode-shard-00-00-ph6as.mongodb.net:27017/trouvkach?ssl=true&replicaSet=Trouvkach-becode-shard-0&authSource=admin&retryWrites=true`,
);

// mongoose.connect(`mongodb://dev:dev@mongo:27017/trouvkach?authSource=admin`);

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

const port = process.env.PORT || 8000

app.listen(port, () =>
    console.log(`🚀 Server is listening on port ${port}.`),
);

// app.get('/', (req, res) => {
//     var results = db.collection('banks').find({})
//     console.log(results);
//     res.send({results: results});
// });

export default db;
