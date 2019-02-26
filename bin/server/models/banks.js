"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const banksSchema = new _mongoose.default.Schema({
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
  deleted_at: {
    type: Date,
    default: null
  }
}, {
  collection: "banks"
});
module.exports = _mongoose.default.model("Bank", banksSchema);
//# sourceMappingURL=banks.js.map