const express = require("express");
const router = new express.Router();

import banksController from "../controllers/banks";
import TerminalsController from "../controllers/terminals";

/* GET ALL TERMINALS */
router.get("/terminals", TerminalsController.show);

/* GET ALL BANKS */
router.get("/bank", banksController.show);
router.get("/bank/:id", banksController.showById);

export default router;
