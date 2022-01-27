// Validating class for Registeration Process
class RegisterValidator {
  static isPasswordValid(Pass) {
    let isValid = true;
    for (let i = 0; i < Pass.length; i++) {
      if (Pass.charAt(i) == " ") {
        isValid = false;
        break;
      }
    }
    return isValid;
  }
  static isSecretCodeValid(SecretCode) {
    let Bool_value;
    if (SecretCode != "Freshwork@2021") {
      Bool_value = false;
    } else {
      Bool_value = true;
    }
    return Bool_value;
  }
  static arePasswordsEqual(Password, ConfirmPassword) {
    let Boolean_Value;
    if (Password != ConfirmPassword) {
      Boolean_Value = false;
    } else {
      Boolean_Value = true;
    }
    return Boolean_Value;
  }
  static isEmailAlreadyExistsValidator(listOfUsers, Email_id) {
    let isTrueOrFalse = true;
    if (listOfUsers != []) {
      for (let i of listOfUsers) {
        if (i.email_id == Email_id) {
          isTrueOrFalse = false;
          break;
        }
      }
    }
    return isTrueOrFalse;
  }
  static constructObject(userName, userEmail, userPassword, userRole) {
    return {
      name: userName,
      email_id: userEmail,
      password: userPassword,
      role: userRole,
    };
  }
}

//Validating class for signing in

class LoginValidator {
  static isDetailsAlreadyExist(array, mail, Password) {
    let trueOrFalse = false;
    for (let i of array) {
      if (mail == i.email_id && Password == i.password) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ email: mail, role: i.role })
        );
        trueOrFalse = true;
        break;
      }
    }
    return trueOrFalse;
  }
}