//import util

const { db } = require("./utils/dataBase.util");
const { app } = require("./app");

const startServer = async () => {
  try {
    await db.authenticate()
    .then(res => console.log("Authenticated"));
    await db.sync()
    .then(res => console.log("Synced"));
    //set server to listen
    const PORT = 4001;
    app.listen(PORT, () => {
      console.log("Express app runnig!");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
