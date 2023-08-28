const axios = require("axios");
const server = require("./src/server.js");
const { conn } = require("./src/db");


const PORT = 3001

conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Backend Funcionando  ${ PORT}`);
    });
  })
  .catch((error) => console.error(error));
