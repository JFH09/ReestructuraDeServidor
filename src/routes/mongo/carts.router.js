import { Router } from "express";
import cartsController from "../../controllers/carts.controller.js";
const router = Router();

router.get("/", cartsController.getRootCart);

router.get("/:id", cartsController.getViewCartById);

router.get("/:id/carrito", cartsController.getCartById);

//AGREGANDO N PRODUCTOS A CARRITO
router.put(
  "/:idCarrito/:product/:idProduct/2",
  cartsController.addNProductsToCart
);

router.put("/:idCarrito", cartsController.editCartByIdandArrayProducts);

router.delete("/:id", cartsController.deleteCartById);

router.post("/", cartsController.addNewCart);

//Agregando id del producto al carrito...
router.put("/:idCart/:product/:idProduct", cartsController.addIdProductToCart);

//Disminuir cantidad de producto en carrito por id
router.delete(
  "/:idCart/product/:idProduct",
  cartsController.restCantProductoById
);
//Eliminando todo el producto del carrito
router.delete(
  "/:idCart/:product/:idProduct",
  cartsController.deleteAllProductCart
);

export default router;
