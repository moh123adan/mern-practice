import express from "express";

import {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", upload.single("image"), createProduct);
router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
