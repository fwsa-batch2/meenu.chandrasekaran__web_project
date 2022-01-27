
function submitHandler(event) {

  event.preventDefault();

  //Get form values

  const userEmail=document.getElementById("mail").value;
  const userPassword=document.getElementById("password").value;

  //Check local storage is empty or not
  
  let listOfUsersFromLocalStorage=JSON.parse(localStorage.getItem("userCredentials"));
  let listOfUsers =(listOfUsersFromLocalStorage==null)?[]:listOfUsersFromLocalStorage;
  localStorage.setItem("userCredentials",JSON.stringify(listOfUsers));

  //Checking whether the given email id or password is already present in list of registered users or not

  if (
    LoginValidator.isDetailsAlreadyExist(listOfUsers, userEmail, userPassword)
  ) {
    Notify.success("You have logged in successfully","alert_message_container","./../pages/management.html")
  } else {
    document.getElementById("error_message_div").innerHTML =
      "Invalid email id or password";
    return null;
  }
}
