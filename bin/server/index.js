"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _routes = _interopRequireDefault(require("./routes.js"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect(`mongodb://bestdev:bestdev@trouvkach-becode-shard-00-00-ph6as.mongodb.net:27017/trouvkach?ssl=true&replicaSet=Trouvkach-becode-shard-0&authSource=admin&retryWrites=true`);

let db = _mongoose.default.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected !!! Yeah !!!");
});
const ports = process.env.PORT || 8000;
const app = (0, _express.default)();
app.use(_express.default.static(_path.default.resolve(__dirname, "../../bin/client")));
app.use("/api", _routes.default);
app.use(_bodyParser.default.json());
app.listen(ports, () => console.log(`🚀 Server is listening on port ${ports}.`));
var _default = db;
exports.default = _default;
//# sourceMappingURL=index.js.map