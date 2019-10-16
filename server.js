const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const indexRouter = require("./api/routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  "mongodb+srv://dienigma:redhat@testclusterone-umiol.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use("/api", indexRouter);

app.listen(5000, () => console.log("server running...."));
