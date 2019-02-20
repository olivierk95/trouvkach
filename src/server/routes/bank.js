import express from "express";
import banks from "../models/banks.js";

const app = express();

/* GET ALL BANKS */

app.get("/", (req, res) => {
    banks.find({}, {country: "BE"}, (err, item) => {
        console.log(banks);
        if (err) {
            return next(err);
        }
        res.json(item);
    });
});

// app.get("/", function(req, res, next) {
//     banks.find({},function(err, item) {
//         console.log(res)
//         if (err) return next(err);
//         res.json(item);
//     });
// });

// /* GET SINGLE Bank BY ID */
// router.get("/:id", function(req, res, next) {
//     Bank.findById(req.params.id, function(err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

// /* SAVE Bank */
// router.post("/", function(req, res, next) {
//     Bank.create(req.body, function(err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

// /* UPDATE Bank */
// router.put("/:id", function(req, res, next) {
//     Bank.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

// /* DELETE Bank */
// router.delete("/:id", function(req, res, next) {
//     Bank.findByIdAndRemove(req.params.id, req.body, function(err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

module.exports = app;
