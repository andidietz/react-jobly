"use strict";

const express =require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use("/users", require('./routes/routes'))

app.listen(3001, function () {
  console.log(`Started on http://localhost:3001`);
});
