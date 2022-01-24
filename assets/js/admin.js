// Validating class for Registeration Process
class RegisterValidator {
  static arePasswordsEqual(Password, ConfirmPassword) {
    let Bool_Value;
    if (Password != ConfirmPassword) {
      Bool_Value = false;
    } else {
      Bool_Value = true;
    }
    return Bool_Value;
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
  static ConstructObject(userName, userEmail, userPassword) {
    return {
      name: userName,
      email_id: userEmail,
      password: userPassword,
      role: "admin",
    };
  }
}

// Initialisation of array of users

let usersList = [];

function submitHandler(event) {
  event.preventDefault();

  //Get form values

  const [name, email, password, confirmPassword, secretCode] = [
    document.getElementById("name").value,
    document.getElementById("email_id").value,
    document.getElementById("password").value,
    document.getElementById("confirm_password").value,
    document.getElementById("secret_code").value,
  ];

  //Validate form credentials

  if (!RegisterValidator.isSecretCodeValid(secretCode)) {
    document.getElementById("error_message_div").innerHTML =
      "Invalid Secret Code";
    return;
  }

  if (!RegisterValidator.arePasswordsEqual(password, confirmPassword)) {
    document.getElementById("error_message_div").innerHTML =
      "Passwords are not same";
    return;
  }

  //Check local storage is empty or not

  let userCredentials =
    localStorage.getItem("user_credentials") == null
      ? []
      : JSON.parse(localStorage.getItem("user_credentials"));
  localStorage.setItem("user_credentials", JSON.stringify(userCredentials));

  //Checking if the user mail id already exists in the register list
  //If already exist show error messages

  if (
    !RegisterValidator.isEmailAlreadyExistsValidator(userCredentials, email)
  ) {
    document.getElementById("error_message_div").innerHTML =
      "Oops! Sorry ! This mail id already exists";
    document.getElementById("error_message_div").style.marginLeft = "65px";
    return;
  }

  //Else store data in local storage, show sucess message and redirect to signin page

  alert(`Registration is done successfully `);
  updateusersList(RegisterValidator.ConstructObject(name, email, password));
  window.location.href = "login.html";
}

function updateusersList(object) {
  //Updating userlist

  console.log(object);
  usersList.push(object);
  const arrayToString = JSON.stringify(usersList);
  localStorage.setItem("user_credentials", arrayToString);
}

function getAllFields() {
  //Return already existing contents in local storage

  let inArray = [];
  const arrayToString = localStorage.getItem("user_credentials");
  if (arrayToString) {
    inArray = JSON.parse(arrayToString);
  } else {
    inArray = [];
  }
  return inArray;
}
function pageOnLoadHandler() {
  //Equating empty user list to contents already existing in local storage

  const all = getAllFields();
  usersList = all;
}
pageOnLoadHandler();

function Redirect_to_student_Page() {
  window.location.href = "../pages/signup.html";
}
