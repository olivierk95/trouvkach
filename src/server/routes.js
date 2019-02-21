import terminalsController from "./controllers/terminal.js";
import banksController from "./controllers/bank.js";

const express = require("express");
const router = new express.Router();

/* GET ALL TERMINALS */
router.get("/terminals", terminalsController.show);
router.get("/terminals/:id", terminalsController.showById);

router.get("/banks", banksController.show);
router.get("/banks/:id", banksController.showById);

export default router;
