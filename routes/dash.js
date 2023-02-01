import express from "express";
import { battery, bms, dash } from "../controllers/dash.js";

const router = express.Router();

router.post("/", dash);
router.post("/bms", bms);
router.post("/battery", battery);

export default router;
