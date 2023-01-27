import express from "express";
import { dash } from "../controllers/dash.js";

const router = express.Router();

router.post("/", dash);

export default router;
