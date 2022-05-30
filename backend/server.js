"use strict";

const app = require("./app");


const { PORT } = require("./config");
const cors = require('cors')
app.use(cors())

// app.use("/users", require('./routes/routes'))

app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
