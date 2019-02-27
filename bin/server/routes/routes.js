"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bank = _interopRequireDefault(require("../controllers/bank"));

var _terminal = _interopRequireDefault(require("../controllers/terminal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const express = require("express");

const router = new express.Router();
router.get("/terminals", _terminal.default.show);
router.get("/pos", _terminal.default.show);
router.get("/banks", _bank.default.show);
router.get("/banks/:id", _bank.default.showById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=routes.js.map