function submitHandler(event) {
  //Prevent default method of refreshing on submitting a function

  event.preventDefault();

  //Getting form values
  const [title, data, subtitle, date] = [
    document.getElementById("title").value,
    document.getElementById("data").value,
    document.getElementById("subtitle").value,
    new Date(),
  ];

  //Checking whether the local storage is empty or not
  if (localStorage.getItem("notifications") == null) {
    localStorage.setItem("notifications", JSON.stringify([]));
  }

  //Pushing object to local storage
  updatePage([
    title,
    data,
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
    subtitle,
  ]);

  //After setting object to local storage redirect to list notifications page

  alert("Notification has been sent to everybody !");

  window.location.href = "../pages/notification.html";
}

function updatePage(array) {

  // Getting already existing contents from local storage

  let listOfNotificationsInLocalStorage = getAllFields();
  
  //Creating object to set in local storage
  let object = {
    title: array[0],
    data: array[1],
    date: array[2],
    month: array[3],
    year: array[4],
    hour: array[5],
    minutes: array[6],
    sub: array[7],
  };

  //Setting created object to local storage

  listOfNotificationsInLocalStorage.push(object);

  localStorage.setItem(
    "notifications",
    JSON.stringify(listOfNotificationsInLocalStorage)
  );
}

function getAllFields() {

  //Returns the already existing content from local storage
  return JSON.parse(localStorage.getItem("notifications"));
}
