const express = require("express");

const registerRouter = express.Router();
//middlaware
const { registerExists } = require("../middlewares/registration.middleware");
//controllers

const {
  getRegistration,
  createRegistration,
  updateRegistration,
  deleteRegister,
  idRegistration,
} = require("../controllers/registration.controller");

//Registration endpoints

registerRouter.get("/", getRegistration);

registerRouter.get("/:id", registerExists, idRegistration);

registerRouter.post("/", createRegistration);

registerRouter.patch("/:id", registerExists, updateRegistration);

registerRouter.delete("/:id", registerExists, deleteRegister);
module.exports = { registerRouter };
