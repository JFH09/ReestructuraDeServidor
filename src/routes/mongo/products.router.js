import { Router } from "express";
import productsController from "../../controllers/products.controller.js";

const router = Router();

router.get("/productsList", productsController.getProducts);

router.get("/:id", productsController.getProductById);

router.post("/", productsController.addNewProduct);

router.put("/:id", productsController.updateProductById);

router.delete("/:id", productsController.deleteProductById);

router.get("/", productsController.getViewProducts);

export default router;
