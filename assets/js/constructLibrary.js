class ConstructLibHtml {
  static libEng() {
    let string = "";
    string = `<div class="sidebar" style="background-image: url('../assets/images/bb.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;">
              <div class="logo-details">
          
                <span class="logo_name">Fresh Libe</span>
              </div>
              <ul class="nav-links">
                <li>
                  <a href="#" class='active' onclick="localStorage.setItem('LibraryName','English')"></a>
          
                    <span class="links_name">English </span>
                  </a>
                </li>
                <li>
                  <a href="#" onclick="localStorage.setItem('LibraryName','LifeSkills')"></>
          
                    <span class="links_name">Life Skills</span>
                  </a>
                </li>
                <li>
                  <a href="#" onclick="localStorage.setItem('LibraryName','Tech')"></>
          
                    <span class="links_name">Technical</span>
                  </a>
                </li>
                <li class="log_out">
                  <a href="../index.html">
                    <em class='bx bx-log-out'></em>
                    <span class="links_name">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
            <section class="home-section" style="background-image: url('../assets/images/bb3.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;">
              <nav style="background-image: url('../assets/images/bb.jpg');
              background-repeat: no-repeat;
              background-size: 100% 100%;">
                <div class="sidebar-button">
                  <em class='bx bx-menu sidebarBtn'></em>
                  <span class="dashboard">English</span>
                </div>
                <div class="search-box">
                  <input type="text" placeholder="Search books,materials">
                  <em class='bx bx-search'></em>
                </div>
              </nav>
              </div><br><br><br><br>
              <div id="slider">
                <ul id="slideWrap">
                  <li><img src="../assets/images/b1.jpeg" alt=""></li>
                  <li><img src="../assets/images/b2.jpeg" alt=""></li>
                  <li><img src="../assets/images/b3.jpg" alt=""></li>
                  <li><img src="../assets/images/b4.jpeg" alt=""></li>
                  <li><img src="../assets/images/b5.jpeg" alt=""></li>
                  <li><img src="../assets/images/b6.jpg" alt=""></li>
                  
          
          
                </ul>
                <span><a id="prev" href="#">&#8666;</a></span>
                <span><a id="next" href="#">&#8667;</a></span>
              </div>
              <br><p class="adding" onclick="addNewImage()">Add New image into slider</p>
              
              <br><br>
              <p class="a1">Top Suggestions</p>
              <br><p class="addBook" onclick="addNewBook()">Add New Book</p>
              
              
              <br><br>
              
               <br>
               <div class="grid-container-element" id="mainElement">
                
              </div>
            <br><p class="addBook" onclick="addNewBook()">Add New Book</p>
              </div>
              <script>
                
                
                var responsiveSlider = function () {
          
                  var slider = document.getElementById("slider");
                  var sliderWidth = slider.offsetWidth;
                  var slideList = document.getElementById("slideWrap");
                  var count = 1;
                  var items = slideList.querySelectorAll("li").length;
                  var prev = document.getElementById("prev");
                  var next = document.getElementById("next");
          
                  window.addEventListener('resize', function () {
                    sliderWidth = slider.offsetWidth;
                  });
          
                  var prevSlide = function () {
                    if (count > 1) {
                      count = count - 2;
                      slideList.style.left = "-" + count * sliderWidth + "px";
                      count++;
                    }
                    else if (count = 1) {
                      count = items - 1;
                      slideList.style.left = "-" + count * sliderWidth + "px";
                      count++;
                    }
                  };
          
                  var nextSlide = function () {
                    if (count < items) {
                      slideList.style.left = "-" + count * sliderWidth + "px";
                      count++;
                    }
                    else if (count = items) {
                      slideList.style.left = "0px";
                      count = 1;
                    }
                  };
          
                  next.addEventListener("click", function () {
                    nextSlide();
                  });
          
                  prev.addEventListener("click", function () {
                    prevSlide();
                  });
          
                  setInterval(function () {
                    nextSlide()
                  }, 2700);
          
                };
                window.onload = function () {
                  responsiveSlider();
                }
                function addNewImage(){
                  localStorage.setItem("library","libeng")
                  window.location.href="./../pages/libengAdd.html";
                }
                function addToSlider(){
                  let str="";
                  let imagesToAdd=JSON.parse(localStorage.getItem("ImagesEng"));
                  if(imagesToAdd!=null && imagesToAdd!=[]){
                    for(let i of imagesToAdd){
                      if(i.library=="english"){
                      str+=\`<li><img src="i.url"></li>\`;
                      }
                    }
                  }
                  return str;
                }
                let addingImage=addToSlider();
                console.log(addingImage);
                document.getElementById("slideWrap").innerHTML+=addingImage;
                function addNewBook(){
                  localStorage.setItem("libbook","libeng")
                  window.location.href="./../pages/libengbAdd.html";
                }
                function givingStar(x){
                  let star="";
                  for(let i=0;i<x;i++){
                    star+="&#9733;";
                  }
                  return star;
                }
                function numFormatter(num) {
                  if(num > 999 && num < 1000000){
                  return (num/1000).toFixed(1) + 'K';
                  }else if(num >= 1000000){
                  return (num/1000000).toFixed(1) + 'M';
                  }else if(num <= 999){
                  return num; 
                  }
                  }
                function addingToDiv(){
                  let str="";
                  let bookToAdd=JSON.parse(localStorage.getItem("BooksEng"));
                  if(bookToAdd!=null && bookToAdd!=[]){
                    for(let i of bookToAdd){
                      if(i.library=="english"){
                      let star=givingStar(i.ratings);
                      let roundNum=numFormatter(i.views);
                      str+=\` <div class="grid-child-element orange">
                                <div class="p5">
                                  <img src=\"i.CoverImageurl\" width="250px" height="270px" alt="">
                                </div>
                                <div class="p6">
                                  <div class="o7">i.name</div>
                                  <div class="o8">star (i.ratings)</div>
                                  <div class="o9">&#128065; Read By roundNum</div>
                                  <br>
                                  <a href=\"i.urlBook\"> <button>Read now</button> </a>
                                </div>
          
                              </div>\`;
                      }
                    }
                  }
                  return str;
                }
                let divAdd=addingToDiv();
                console.log(divAdd);
                document.getElementById("mainElement").innerHTML+=divAdd;
              </script>`;
    return string;
  }
  static LibLs() {
    let string = "";
    string = `<div class="sidebar" style="background-image: url('../assets/images/bb.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;">
              <div class="logo-details">
          
                <span class="logo_name">Fresh Libe</span>
              </div>
              <ul class="nav-links">
                <li>
                  <a href="#"  onclick="localStorage.setItem('LibraryName','English')"></a>
          
                    <span class="links_name">English </span>
                  </a>
                </li>
                <li>
                  <a href="#" class='active' onclick="localStorage.setItem('LibraryName','LifeSkills')"></>
          
                    <span class="links_name">Life Skills</span>
                  </a>
                </li>
                <li>
                  <a href="#" onclick="localStorage.setItem('LibraryName','Tech')"></>
          
                    <span class="links_name">Technical</span>
                  </a>
                </li>
                <li class="log_out">
                  <a href="../index.html">
                    <em class='bx bx-log-out'></em>
                    <span class="links_name">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
            <section class="home-section" style="background-image: url('../assets/images/bb3.jpg');
            background-repeat: no-repeat;
            background-size: 100% 100%;">
              <nav style="background-image: url('../assets/images/bb.jpg');
              background-repeat: no-repeat;
              background-size: 100% 100%;">
                <div class="sidebar-button">
                  <em class='bx bx-menu sidebarBtn'></em>
                  <span class="dashboard">English</span>
                </div>
                <div class="search-box">
                  <input type="text" placeholder="Search books,materials">
                  <em class='bx bx-search'></em>
                </div>
              </nav>
              </div><br><br><br><br>
              <div id="slider">
                <ul id="slideWrap">
                  <li><img src="../assets/images/b1.jpeg" alt=""></li>
                  <li><img src="../assets/images/b2.jpeg" alt=""></li>
                  <li><img src="../assets/images/b3.jpg" alt=""></li>
                  <li><img src="../assets/images/b4.jpeg" alt=""></li>
                  <li><img src="../assets/images/b5.jpeg" alt=""></li>
                  <li><img src="../assets/images/b6.jpg" alt=""></li>
                  
          
          
                </ul>
                <span><a id="prev" href="#">&#8666;</a></span>
                <span><a id="next" href="#">&#8667;</a></span>
              </div>
              <br><p class="adding" onclick="addNewImage()">Add New image into slider</p>
              
              <br><br>
              <p class="a1">Top Suggestions</p>
              <br><p class="addBook" onclick="addNewBook()">Add New Book</p>
              
              
              <br><br>
              
               <br>
               <div class="grid-container-element" id="mainElement">
                
              </div>
            <br><p class="addBook" onclick="addNewBook()">Add New Book</p>
              </div>
              <script>
                
                
                var responsiveSlider = function () {
          
                  var slider = document.getElementById("slider");
                  var sliderWidth = slider.offsetWidth;
                  var slideList = document.getElementById("slideWrap");
                  var count = 1;
                  var items = slideList.querySelectorAll("li").length;
                  var prev = document.getElementById("prev");
                  var next = document.getElementById("next");
          
                  window.addEventListener('resize', function () {
                    sliderWidth = slider.offsetWidth;
                  });
          
                  var prevSlide = function () {
                    if (count > 1) {
                      count = count - 2;
                      slideList.style.left = "-" + count * sliderWidth + "px";
                      count++;
                    }
                    else if (count = 1) {
                      count = items - 1;
                      slideList.style.left = "-" + count * sliderWidth + "px";
                      count++;
                    }
                  };
          
                  var nextSlide = function () {
                    if (count < items) {
                      slideList.style.left = "-" + count * sliderWidth + "px";
                      count++;
                    }
                    else if (count = items) {
                      slideList.style.left = "0px";
                      count = 1;
                    }
                  };
          
                  next.addEventListener("click", function () {
                    nextSlide();
                  });
          
                  prev.addEventListener("click", function () {
                    prevSlide();
                  });
          
                  setInterval(function () {
                    nextSlide()
                  }, 2700);
          
                };
                window.onload = function () {
                  responsiveSlider();
                }
                function addNewImage(){
                  localStorage.setItem("library","libls")
                  window.location.href="./../pages/libengAdd.html";
                }
                function addToSlider(){
                  let str="";
                  let imagesToAdd=JSON.parse(localStorage.getItem("ImagesEng"));
                  if(imagesToAdd!=null && imagesToAdd!=[]){
                    for(let i of imagesToAdd){
                      if(i.library=="english"){
                      str+=\`<li><img src=\'${i.url}\'></li>\`;
                      }
                    }
                  }
                  return str;
                }
                let addingImage=addToSlider();
                console.log(addingImage);
                document.getElementById("slideWrap").innerHTML+=addingImage;
                function addNewBook(){
                  localStorage.setItem("libbook","libls")
                  window.location.href="./../pages/libengbAdd.html";
                }
                function givingStar(x){
                  let star="";
                  for(let i=0;i<x;i++){
                    star+="&#9733;";
                  }
                  return star;
                }
                function numFormatter(num) {
                  if(num > 999 && num < 1000000){
                  return (num/1000).toFixed(1) + 'K';
                  }else if(num >= 1000000){
                  return (num/1000000).toFixed(1) + 'M';
                  }else if(num <= 999){
                  return num; 
                  }
                  }
                function addingToDiv(){
                  let str="";
                  let bookToAdd=JSON.parse(localStorage.getItem("BooksEng"));
                  if(bookToAdd!=null && bookToAdd!=[]){
                    for(let i of bookToAdd){
                      if(i.library=="ls"){
                      let star=givingStar(i.ratings);
                      let roundNum=numFormatter(i.views);
                      str+=\` <div class="grid-child-element orange">
                                <div class="p5">
                                  <img src=\"${i.CoverImageurl}\" width="250px" height="270px" alt="">
                                </div>
                                <div class="p6">
                                  <div class="o7">${i.name}</div>
                                  <div class="o8">${star} (${i.ratings})</div>
                                  <div class="o9">&#128065; Read By ${roundNum}</div>
                                  <br>
                                  <a href=\"${i.urlBook}\"> <button>Read now</button> </a>
                                </div>
          
                              </div>\`;
                      }
                    }
                  }
                  return str;
                }
                let divAdd=addingToDiv();
                console.log(divAdd);
                document.getElementById("mainElement").innerHTML+=divAdd;
              </script>`;
    return string;
  }
  static LibTech() {
    let string = "";
    string = `<div class="sidebar">
    <div class="logo-details">

      <span class="logo_name">Fresh Libe</span>
    </div>
      <ul class="nav-links">
        <li>
          <a href="#" onclick="localStorage.setItem('LibraryName','English')" >

            <span class="links_name">English </span>
          </a>
        </li>
        <li>
          <a href="#" onclick="localStorage.setItem('LibraryName','LifeSkills')" >

            <span class="links_name">Life Skills</span>
          </a>
        </li>
        <li>
          <a href="#" class="active" onclick="localStorage.setItem('LibraryName','Tech')">

            <span class="links_name">Technical</span>
          </a>
        </li>
        <li class="log_out">
          <a href="../index.html">
            <em class='bx bx-log-out'></em>
            <span class="links_name">Logout</span>
          </a>
        </li>
      </ul>
  </div>
  <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <em class='bx bx-menu sidebarBtn'></em>
        <span class="dashboard">Technical</span>
      </div>
      <div class="search-box">
        <input type="text" placeholder="Search books,materials">
        <em class='bx bx-search' ></em>
      </div>
    </nav>
  </div><br><br><br><br>
  <div class="cont">
    <br><br><br><br><br><br><br>
    <span><a href="./../pages/libraryhtml.html"><img src="../assets/images/g1.png" height="500px" width="350px" alt=""/></a></span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span><a href="./../pages/librarycss.html"><img src="../assets/images/g2.png" height="500px" width="350px" alt=""/></a></span>&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;
    <span><a href="./../pages/libraryjs.html"><img src="../assets/images/g3.png" height="500px" width="450px" alt=""/></a></span>
    </div>`;
    return string;
  }
}
