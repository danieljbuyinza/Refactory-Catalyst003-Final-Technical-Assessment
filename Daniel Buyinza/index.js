const express = require("express");
const server = express();

const path = require("path");

server.set("view engine", "pug");
server.set("views", path.join(__dirname, "/views"));
server.use(express.static("statics"));

server.listen(3000, () => {
    console.log("Listening on port 3000");
})

server.get("/", (req, res) => {
    res.render("student-details-entry-form");
})