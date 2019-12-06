const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const server = express();

const path = require("path");

server.set("view engine", "pug");
server.set("views", path.join(__dirname, "/views"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("statics"));

server.listen(3000, () => {
    console.log("Listening on port 3000");
})

const entryFormRoutes = require("./routes/entry-form-routes");
server.use("/entry-form", entryFormRoutes);

const studentProfileRoutes = require("./routes/student-profile-routes");
server.use("/student-profile", studentProfileRoutes);

// Connecting to the database
mongoose.connect("mongodb://localhost:27017/student", { useNewUrlParser: true, useUnifiedTopology: true });