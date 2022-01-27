
// Initialisation of array of users

let usersList = [];

function submitHandler(event) {
  event.preventDefault();

  //Get form values

  const name = document.getElementById("name").value;
  const email = document.getElementById("email_id").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  //Validate form credentials

  if (!RegisterValidator.isPasswordValid(password)) {
    document.getElementById("error_message_div").innerHTML =
      "Passwords should not contain empty space";
    return;
  }

  if (!RegisterValidator.arePasswordsEqual(password, confirmPassword)) {
    document.getElementById("error_message_div").innerHTML =
      "Passwords are not same";
    return;
  }

  //Check local storage is empty or not


  let listOfUsersFromLocalStorage=JSON.parse(localStorage.getItem("userCredentials"));
  let userCredentials =
    listOfUsersFromLocalStorage == null
      ? []
      : listOfUsersFromLocalStorage;
  localStorage.setItem("userCredentials", JSON.stringify(userCredentials));

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

  updateusersList(RegisterValidator.constructObject(name, email, password,"student"));

  Notify.success("You have registered successfully","alert_message_container","login.html");
  
}

function updateusersList(object) {
  //Updating userlist

  console.log(object);
  usersList.push(object);
  const arrayToString = JSON.stringify(usersList);
  localStorage.setItem("userCredentials", arrayToString);
}

function getAllFields() {
  //Return already existing contents in local storage

  let inArray = [];
  const arrayToString = localStorage.getItem("userCredentials");
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

function Redirect_to_admin_page() {
  window.location.href = "../pages/admin.html";
}
