const { Registration } = require("../models/registration.model");

//verificar todos los registros
const getRegistration = async (req, res) => {
  try {
    const usersRegistered = await Registration.findAll({
      //where: {status: "active" },
    });
    res.status(200).json({
      status: "success",
      data: {
        usersRegistered,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

//mostrar registro por ID
const idRegistration = async (req, res) => {
  try {
  const { regisId } = req;
   res.status(200).json({
      status: "succes",
      data: { regisId},
    });
  } catch (error) {
    console.log(error);
  }
};

//registrar hora de entrada
const createRegistration = async (req, res) => {
  try {
    const { entranceTime } = req.body;
    const newRegistration = await Registration.create({
      entranceTime,
    });
    res.status(201).json({
      status: "success",
      data: { newRegistration },
    });
  } catch (error) {
    console.log(error);
  }
};

//registrar hora de salida
const updateRegistration = async (req, res) => {
  try {
    const { exitTime } = req.body;
    const { regisId } = req;

    await regisId.update({ exitTime });
    res.status(200).json({
      status: "success",
      data: { regisId },
    });
  } catch (error) {
    console.log(error);
  }
};

//cancelar registro

const deleteRegister = async (req, res) => {
  try {
    const { regisId } = req;
    await regisId.update({ status: "canceled" });
    res.status(204).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getRegistration,
  createRegistration,
  updateRegistration,
  deleteRegister,
  idRegistration,
};
