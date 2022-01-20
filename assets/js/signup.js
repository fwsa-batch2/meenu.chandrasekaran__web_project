let usersList = [];
function Redirect_to_admin_page() {
  window.location.href = "../pages/admin.html";
}

function submitHandler(event) {
  event.preventDefault();

  //Get form values

  const name = document.getElementById("name").value;
  const email = document.getElementById("email_id").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  //Validate form credentials

  if (password != confirmPassword) {
    document.getElementById("error_message_div").innerHTML =
      "Passwords are not same";
    return;
  }

  //Check local storage is empty or not

  let userCredentials = JSON.parse(localStorage.getItem("user_credentials"));
  if (userCredentials == null) {
    localStorage.setItem("user_credentials", JSON.stringify([]));
    userCredentials = [];
  }

  //Checking if the user mail id already exists in the register list
  //If already exist show error messges

  let isEmailAlreadyExist = false;
  if (userCredentials != []) {
    for (let i of userCredentials) {
      let emailInLocalStorage = i.email_id;
      if (email == emailInLocalStorage) {
        isEmailAlreadyExist = true;
        break;
      }
    }
    if (isEmailAlreadyExist) {
      document.getElementById("error_message_div").innerHTML =
        "Oops! Sorry ! This mail id already exists";
      document.getElementById("error_message_div").style.marginLeft = "65px";
      return;
    }
  }

  //else store data in local storage, show sucess message and redirect to signin page

  let object_to_add_in_userList;

  object_to_add_in_userList = {
    name: name,
    email_id: email,
    password: password,
    role: "student",
  };

  alert(`Registration is done successfully `);
  updateusersList(object_to_add_in_userList);
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
