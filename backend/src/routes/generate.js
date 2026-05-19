import express from "express";
import multer from "multer";
import { generateOutfit } from "../controllers/generateController.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.array("images", 10), generateOutfit);

export default router;
