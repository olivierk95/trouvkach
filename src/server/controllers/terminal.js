import Terminals from "../models/terminals.js";

/* GET ALL TERMINALS */
const show = (req, res) => {
    Terminals.find()
        .populate("bank")
        .then(terminals => {
            res.status(200).json({terminals});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
};

/* GET ONE TERMINAL */
const showById = (req, res, next) => {
    Terminals.findById(req.params.id, (err, post) => {
        if (err) {
            return next(err);
        }
        res.json(post);
    });
};

const getByPosition = (req, res) => {
    Terminals.find()
        .populate("bank")
        .where({latitude: {$lte: req.params.lat1, $gte: req.params.lat2}})
        .where({longitude: {$lte: req.params.lng1, $gte: req.params.lng2}})
        .then(terminals => {
            res.status(200).json({terminals});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
};

const modify = (req, res) => {
    Terminals.findByIdAndUpdate(
        req.params.id,
        {isEmpty: true},
        {new: true},
        (err, pos) => {
            if (err) {
                return next(err);
            }
            res.json(pos);
        },
    );
};

exports.show = show;
exports.showById = showById;
exports.getByPosition = getByPosition;
exports.modify = modify;
