/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import express from "express";
import path from "path";

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

// const uri = "mongodb://bestdev:bestdev@trouvkach-becode-shard-00-00-ph6as.mongodb.net:27017,trouvkach-becode-shard-00-01-ph6as.mongodb.net:27017,trouvkach-becode-shard-00-02-ph6as.mongodb.net:27017/test?ssl=true&replicaSet=Trouvkach-becode-shard-0&authSource=admin&retryWrites=true";
