function setColor(btn, color) {
    var count = 1;
    var property = document.getElementById(btn)
    if (count == 0) {
      property.style.backgroundColor = "white"
      
    }
    else {
      property.style.backgroundColor = "#3AFA98"
      property.style.color = "black"
      
    }
  }
  
  
  function s(btn, color) {
    var count = 1;
    var property = document.getElementById(btn)
    if (count == 0) {
      property.style.backgroundColor = "white"
     
    }
    else {
      property.style.backgroundColor = "#F087A7"
      property.style.color = "black"
      
    }
  }
  function s8(btn, color) {
    var count = 1;
    var property = document.getElementById(btn)
    if (count == 0) {
      property.style.backgroundColor = "white"
      
    }
    else {
      property.style.backgroundColor = "#F087A7"
      property.style.color = "black"
      
    }
  }
  
  function se(btn, color) {
    var count = 1;
    var property = document.getElementById(btn)
    if (count == 0) {
      property.style.backgroundColor = "white"
      
    }
    else {
      property.style.backgroundColor = "#56A7DB"
      property.style.color = "black"
     
    }
  }


  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".sidebarBtn");
  sidebarBtn.onclick = function () {
    sidebar.classList.toggle("active");
    if (sidebar.classList.contains("active")) {
      sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else
      sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
  function la(src) {
    window.location = src;
  }
  function la1(src) {
    window.location = src;

  }
  $("button").click(function () {
    let clicked = true;
    if (clicked) {
      $(this).toggleClass('active');
      clicked = true;
    } else {
      $(this).removeClass('active');
      clicked = false;
    }
  });