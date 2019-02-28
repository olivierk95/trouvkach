"use strict";

var _banks = _interopRequireDefault(require("../models/banks.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const show = (req, res) => {
  _banks.default.find().then(banksItem => {
    res.status(200).json({
      banks: banksItem
    });
  }).catch(err => {
    res.status(500).send({
      errors: [err.message]
    });
  });
};

const showById = (req, res, next) => {
  _banks.default.findById(req.params.id, (err, post) => {
    if (err) {
      return next(err);
    }

    res.json(post);
  });
};

exports.show = show;
exports.showById = showById;
//# sourceMappingURL=bank.js.map