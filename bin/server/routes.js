"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _terminal = _interopRequireDefault(require("./controllers/terminal.js"));

var _bank = _interopRequireDefault(require("./controllers/bank.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require("express");

const router = new express.Router();
router.get("/terminals", _terminal.default.show);
router.get("/terminals/:id", _terminal.default.showById);
router.get("/pos/:lat1/:lat2/:lng1/:lng2", _terminal.default.getByPosition);
router.get("/banks", _bank.default.show);
router.get("/banks/:id", _bank.default.showById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=routes.js.map