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
function submitHandler(event) {

  event.preventDefault();

  //Get form values
  const [userEmail, userPassword] = [
    document.getElementById("mail").value,
    document.getElementById("password").value,
  ];

  //Check local storage is empty or not

  let listOfUsers = JSON.parse(localStorage.getItem("user_credentials"));
  if (listOfUsers == null) {
    localStorage.setItem("user_credentials", JSON.stringify([]));
    listOfUsers = [];
  }

  //Checking whether the given email id or password is already present in list of registered users or not

  if (
    LoginValidator.isDetailsAlreadyExist(listOfUsers, userEmail, userPassword)
  ) {
    alert("Welcome!You have logged in successfully.");
    window.location.href = "management.html";
  } else {
    document.getElementById("error_message_div").innerHTML =
      "Invalid email id or password";
    return null;
  }
}
