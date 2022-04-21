const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3001;

routes(app);


var nomes = ["dd", "ff", "gg", "rr"]
for (var i = 0; i < nomes.length; i++) {
  if (nomes.length > 5) {
    console.log(nomes[i])
  }
}


app.listen(port, () => console.log(`servidor está rodando na porta ${port}`));

module.exports = app;
