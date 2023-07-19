import { Router } from "express";
import userModel from "../../dao/models/user.js";
import passport from "passport";
import sessionsController from "../../controllers/sessions.controller.js";

const router = Router();

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
  sessionsController.gitHub
);

router.get(
  "/githubcallback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  sessionsController.githubcallback
);

router.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "/login" }),
  sessionsController.register
);

router.post("/login", passport.authenticate("login"), sessionsController.login);

router.get("/user/:id", sessionsController.getInfoUserById);

router.get("/logoutSession", sessionsController.logoutSession);

export default router;
