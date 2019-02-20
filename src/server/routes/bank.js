import express from "express";
import banks from "../models/banks.js";

const app = express();

/* GET ALL BANKS */

app.get("/", (req, res) => {
    banks
        .find()
        .then(banksItem => {
            res.status(200).json({banks: banksItem});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
});

/* GET SINGLE Bank BY ID */
app.get("/:id", (req, res, next) => {
    banks.findById(req.params.id, (err, post) => {
        if (err) {
            return next(err);
        }
        res.json(post);
    });
});

/* SAVE Bank */
app.post("/", (req, res, next) => {
    banks.create(req.body, (err, post) => {
        if (err) {
            return next(err);
        }
        res.json(post);
    });
});

/* UPDATE Bank */
app.put("/:id", (req, res, next) => {
    banks.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) {
            return next(err);
        }
        res.json(post);
    });
});

// /* DELETE Bank */
// app.delete("/:id", function(req, res, next) {
//     banks.findByIdAndRemove(req.params.id, req.body, function(err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

module.exports = app;
