"use strict";

var _terminals = _interopRequireDefault(require("../models/terminals.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const show = (req, res) => {
  _terminals.default.find().populate("bank").then(terminals => {
    res.status(200).json({
      terminals
    });
  }).catch(err => {
    res.status(500).send({
      errors: [err.message]
    });
  });
};

const showById = (req, res, next) => {
  _terminals.default.findById(req.params.id, (err, post) => {
    if (err) {
      return next(err);
    }

    res.json(post);
  });
};

const getByPosition = (req, res) => {
  _terminals.default.find().populate("bank").where({
    latitude: {
      $lte: req.params.lat1,
      $gte: req.params.lat2
    }
  }).where({
    longitude: {
      $lte: req.params.lng1,
      $gte: req.params.lng2
    }
  }).then(terminals => {
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
exports.showById = showById;
exports.getByPosition = getByPosition;
//# sourceMappingURL=terminal.js.map