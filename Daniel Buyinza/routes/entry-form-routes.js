const express = require("express");
const router = express.Router();
const Register = require("../models/student-entry-model");

router.get("/", (req, res) => {
    res.render("student-details-entry-form");
})

router.post("/", async (req, res) => {
    const register = new Register(req.body);
    try {
        const registered = await register.save();
        Register.find().then(
            res.redirect("/student-profile")
        )
    } catch (err) {
        res.status(500).send("Unable to save to database");
        res.json({ message: err });
    }
})

module.exports = router;