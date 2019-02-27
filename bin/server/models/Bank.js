"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = new _mongoose.default.Schema({
  country: String,
  color: String,
  name: String,
  icon: String,
  url: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  deleted: {
    type: Date,
    default: null
  }
});

var _default = _mongoose.default.model("banks", schema);

exports.default = _default;
//# sourceMappingURL=Bank.js.map