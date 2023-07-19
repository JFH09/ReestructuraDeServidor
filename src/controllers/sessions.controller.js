import userModel from "../dao/models/user.js";
const gitHub = async (req, res) => {};
const githubcallback = async (req, res) => {
  console.log("usuario recibe gitHub -> ", req.user);
  let idUser = JSON.stringify(req.user._id);
  let id = "";
  id = idUser.split('"');
  console.log(id[1]);
  req.session.user = {
    first_name: req.user.first_name,
    last_name: req.user.last_name,
    email: req.user.email,
    id: id[1],
    age: req.user.age,
  };
  console.log(req.session.user);
  res.redirect("/api/products");
};

const register = async (req, res) => {
  console.log("Entro a registrar un user...");
  res.status(201).json({ status: "success", message: "Usuario Registrado" });
};

const login = async (req, res) => {
  console.log("entro a loguearse, ", req.user);
  if (!req.user)
    return res
      .status(400)
      .send({ status: "error", error: "credenciales invalidas" });

  try {
    let idUser = JSON.stringify(req.user._id);
    console.log(idUser);
    let id = "";
    id = idUser.split('"');
    console.log(id[1]);
    let infoUsuario = await userModel.findById(id[1]);
    let idCart = JSON.stringify(infoUsuario.carts[0]._id);
    console.log("id cart ------", typeof idCart);
    idCart = idCart.split('"');
    console.log(idCart[1]);
    console.log(
      "55 sessionRouter - Informacion usuario logueado ->",
      infoUsuario
    );
    req.session.user = {
      first_name: infoUsuario.first_name,
      last_name: infoUsuario.last_name,
      email: infoUsuario.email,
      id: id[1],
      age: infoUsuario.age,
      rol: infoUsuario.rol,
      idCart: idCart[1],
    };
    console.log("User Session en login -> ", req.session.user);
    res.send({ status: "success", payload: req.user });
  } catch (error) {
    console.log("no se pudo realizar la operacion ", error);
  }
};

const getInfoUserById = (req, res) => {
  console.log("buscando info usuario...");
  let id = req.params.id;
  console.log("130", id);
  try {
    let user = userModel.findById(id);
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    console.log("no se pudo obtener la información ");
    res.send(401).json({ status: "error", error: error });
  }
};

const logoutSession = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.json({ status: "Logout error", body: err });
    }
    res.status(201).json({ status: "success", payload: "logout ok!" });
    console.log("Se cerro la sesion correctamente...");
  });
};

export default {
  gitHub,
  githubcallback,
  register,
  login,
  getInfoUserById,
  logoutSession,
};
