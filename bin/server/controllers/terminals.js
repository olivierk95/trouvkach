"use strict";

const Terminals = require("../models/terminals");

const show = (req, res) => {
  Terminals.find().then(terminals => {
    res.status(200).json({
      terminals
    });
  }).catch(err => {
    res.status(500).send({
      errors: [err.message]
    });
  });
};

exports.show = show;
//# sourceMappingURL=terminals.js.map