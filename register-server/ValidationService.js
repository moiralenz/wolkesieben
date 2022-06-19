// Validate form input elements
const validateLib = require('./ValidationLib');


function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("username", userObj.username);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("phone", userObj.phone);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("birthyear", userObj.birthyear);
    if (result.isNotValid) { return result; }

    //check length
    result = validateLib.checkLength("username",userObj.username, 3, 15);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("password", userObj.password, 6, 25);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //check phone syntax
    result = validateLib.checkPhone("phone", userObj.phone);
    if (result.isNotValid) { return result; }

    //check birth syntax
    result = validateLib.checkBirthyear("birhtyear", userObj.birthyear);
    if (result.isNotValid) { return result; }


    //all inputs are valid and isNotValid=false
    return false;
}

//Module exports
module.exports = {
    validateUser
}
