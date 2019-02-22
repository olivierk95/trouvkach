const banks = require("../models/banks");

// GET ALL BANKS
const show = (req, res) => {
    banks
        .find()
        .then(banksItem => {
            res.status(200).json({banks: banksItem});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
};
// GET SINGLE BANK BY ID
const showById = (req, res) => {
    banks
        .findOne(req.params._id)
        .then(banksItem => {
            res.status(200).json({banks: banksItem});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
};

// UPDATE BANK
exports.show = show;

exports.showById = showById;
