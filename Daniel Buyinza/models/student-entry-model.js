const mongoose = require("mongoose");

// schema definition
const registrationSchema = mongoose.Schema({
    surname: {
        type: String,
        required: "Please enter surname"
    },
    givenName: {
        type: String,
        required: "Please enter given name"
    },
    gender: {
        type: String,
        required: "Please enter your gender"
    },
    dateOfBirth: {
        type: String,
        required: "Please enter your date of birth"
    },
    country: {
        type: String,
        required: "Please enter your country"
    },
    phoneNumber: {
        type: Number,
        required: "Please enter phone number"
    },
    emailAddress: {
        type: String,
        required: "Please enter your email address"
    },
    skills: {
        type: String,
        required: "Please enter your skills"
    },
    projects: {
        type: String,
        required: "Please enter your projects"
    },
});

module.exports = mongoose.model("student", registrationSchema);