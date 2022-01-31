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
              </div>`;
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
              </div>`;
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
