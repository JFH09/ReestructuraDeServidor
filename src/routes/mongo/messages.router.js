import { Router } from "express";
import { messageModel } from "../../dao/models/message.model.js";
import messagesController from "../../controllers/messages.controller.js";

const router = Router();

router.get("/", messagesController.getViewMessages);

router.post("/", messagesController.addNewChat);

router.get("/messages", messagesController.getMessages);

export default router;
