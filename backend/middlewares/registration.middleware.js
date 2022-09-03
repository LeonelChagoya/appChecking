const { Registration } = require("../models/registration.model");

const registerExists = async (req, res, next) => {
  try {
    const { id } = req.params;
    const regisId = await Registration.findOne({
      where: { id },
    });

    if (!regisId) {
      return res.status(404).json({
        status: "error",
        message: "There is no registration",
      });
    }

    req.regisId = regisId;
    next();
  } catch (error) {
    console.log(error);
  }
};
module.exports = { registerExists };
