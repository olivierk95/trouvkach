"use strict";

const banks = require("../models/banks");

const show = (req, res) => {
  banks.find().then(banksItem => {
    res.status(200).json({
      banks: banksItem
    });
  }).catch(err => {
    res.status(500).send({
      errors: [err.message]
    });
  });
};

const showById = (req, res) => {
  banks.findOne(req.params._id).then(banksItem => {
    res.status(200).json({
      banks: banksItem
    });
  }).catch(err => {
    res.status(500).send({
      errors: [err.message]
    });
  });
};

exports.show = show;
exports.showById = showById;
//# sourceMappingURL=banks.js.map