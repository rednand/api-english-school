const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoutes.js");
const niveis = require("./niveisRoutes.js");
const turmas = require("./turmasRoute.js");

module.exports = (app) => {
  app.use(bodyParser.json(), pessoas, niveis, turmas);
};
