import express from "express";
import { createMulterConfig } from "../config/multer.config.js";
import imageFilter from "../config/filterImage.js";
import protectRoute from "../middlewares/protectRoute.js";
import {
  uploadSingleFile,
  uploadSinglePDF,
  deletePDF,
} from "../controllers/upload.controller.js";
import pdfFilter from "../config/filterPDF.js";

const router = express.Router();
const upload = createMulterConfig(imageFilter);
const uploadPDF = createMulterConfig(pdfFilter);

// Single file upload route
router.post(
  "/single",
  protectRoute,
  upload.single("picture"),
  uploadSingleFile
);

// Single pdf upload route
router.post("/pdf", protectRoute, uploadPDF.single("pdf"), uploadSinglePDF);

router.delete("/pdf/:id", protectRoute, deletePDF);

export default router;
