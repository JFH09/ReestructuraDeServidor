import { messageModel } from "../dao/models/message.model.js";

const getViewMessages = async (req, res) => {
  console.log("obteniendo mensajes...");
  let messages = await messageModel.find();
  console.log(messages);
  if (messages != []) {
    console.log("hay mensajes...");
  } else {
    console.log("No hay mensajes...");
  }

  res.render("chat", { messages });
};

const addNewChat = async (req, res) => {
  const { user, message } = req.body;
  console.log("Creando nuevo chat...", user, message);
  let result = await messageModel.create({
    user,
    message,
  });
  console.log(result);
  res.status(201).json(result);
};

const getMessages = async (req, res) => {
  console.log("obteniendo mensajes...");
  let messages = await messageModel.find();
  console.log(messages);
  if (messages != []) {
    console.log("hay mensajes...");
  } else {
    console.log("No hay mensajes...");
  }
  res.status(201).json(messages);
};

export default {
  getViewMessages,
  addNewChat,
  getMessages,
};
