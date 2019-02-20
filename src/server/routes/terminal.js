const express = require("express");
const router = new express.Router();
const Terminals = require("../models/terminals.js");

/* GET ALL TERMINALS */
router.get("/terminals", (req, res) => {
    Terminals.find()
        .then(terminals => {
            res.status(200).json({terminals});
        })
        .catch(err => {
            res.status(500).send({errors: [err.message]});
        });
});

export default router;
