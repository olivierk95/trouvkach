"use strict";

var _express = _interopRequireDefault(require("express"));

var _banks = _interopRequireDefault(require("../models/banks.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get("/", (req, res) => {
  _banks.default.find().then(banksItem => {
    res.status(200).json({
      banks: banksItem
    });
  }).catch(err => {
    res.status(500).send({
      errors: [err.message]
    });
  });
});
app.get("/:id", (req, res, next) => {
  _banks.default.findById(req.params.id, (err, post) => {
    if (err) {
      return next(err);
    }

    res.json(post);
  });
});
app.post("/", (req, res, next) => {
  _banks.default.create(req.body, (err, post) => {
    if (err) {
      return next(err);
    }

    res.json(post);
  });
});
app.put("/:id", (req, res, next) => {
  _banks.default.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) {
      return next(err);
    }

    res.json(post);
  });
});
module.exports = app;
//# sourceMappingURL=bank.js.map