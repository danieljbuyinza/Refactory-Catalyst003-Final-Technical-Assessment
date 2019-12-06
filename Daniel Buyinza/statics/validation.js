function validateFields() {
    var surname = document.getElementById("surname");
    var givenName = document.getElementById("givenName");
    var dateOfBirth = document.getElementById("dateOfBirth");
    var gender = document.getElementById("gender");
    var country = document.getElementById("country");
    var placeOfResidence = document.getElementById("placeOfResidence");
    var phoneNumber = document.getElementById("phoneNumber");
    var emailAddress = document.getElementById("emailAddress");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");

    if (surname.value.length == 0) {
        sn.textContent = `Surname is required`
        return false;
    }

    if (givenName.value.length == 0) {
        gn.textContent = `Given name is required`
        return false;
    }

    if (gender.value.length == 0) {
        return false;
    }

    if (dateOfBirth.value.length == 0) {
        dob.textContent = `Date of birth is required`
        return false;
    }

    if (country.value.length == 0) {
        c.textContent = `Country Field is required`
        return false;
    }

    if (placeOfResidence.value.length == 0) {
        por.textContent = `Date of birth is required`
        return false;
    }

    if (phoneNumber.value.length == 0) {
        pn.textContent = `Country Field is required`
        return false;
    }

    if (emailAddress.value.length == 0) {
        ea.textContent = `This field is required`
        return false;
    }

    if (skills.value.length == 0) {
        s.textContent = `This field is required`
        return false;
    }

    if (projects.value.length == 0) {
        p.textContent = `This field is required`
        return false;
    }
}