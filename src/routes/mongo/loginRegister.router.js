import { Router } from "express";
import loginRegisterController from "../../controllers/loginRegister.controller.js";

const router = Router();

router.get("/register", loginRegisterController.getViewRegister);

router.get("/", loginRegisterController.getViewRoot);

router.get("/login", loginRegisterController.getViewLogin);

export default router;
