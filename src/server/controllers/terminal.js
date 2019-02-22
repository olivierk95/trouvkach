import Terminals from "../models/terminals.js";

/* GET ALL TERMINALS */
const show = (req, res) => {
    Terminals.find()
        .then(terminals => {
            res.status(200).json({terminals});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
};

/* GET ONE TERMINAL */
const showById = (req, res) => {
    Terminals.findById(req.params.id, (err, post) => {
        if (err) {
            return next(err);
        }
        res.json(post);
    });
};

exports.show = show;
exports.showById = showById;
