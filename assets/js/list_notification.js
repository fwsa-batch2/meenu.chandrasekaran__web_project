function onPageLoad() {
  //Getting list of notifications from local storage

  const notificationsList = JSON.parse(localStorage.getItem("notifications"));

  let innerHtmlContent = "";

  //Creating innerHTML content to be pushed in html page dynamically

  for (let i of notificationsList) {
    innerHtmlContent += `<div class=\"notification_container\">
  <div class=\"image_container\"><img src=\"../assets/images/bell.png\" height=\"50px\" width=\"50px\" alt=\"\"></div>
  <div class=\"title_container\">
  ${i.title}
  </div><br><br>
  <div class=\"sub_container\">
  <span class=\"subtitle_container\">${i.sub} </span><span class=\"data_container\"> <a href=\"https://freshworks.zoom.us/my/b2classroom\">${i.data}</a></span>
  <span class="time_container">${i.hour}:${i.minutes}(${i.date}/${i.month}/${i.year}) </span>
  </div>
  
  </div>`;
  }

  console.log(innerHtmlContent);

  document.getElementById("listOfNotifications").innerHTML = innerHtmlContent;
}

onPageLoad();

function logout() {
  //Function to log out
  localStorage.removeItem("loggedInUser");
  window.location.href = "./../index.html";
}

function Redirect_to_createNotifications() {
  window.location.href = "./../pages/create_not.html";
}

function Redirect_to_indexPage() {
  window.location.href = "./../index.html";
}
