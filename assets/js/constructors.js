class StringConstructor {
  static constructString(array) {
    let str = "";
    str = `<a href="${array[0]}"><img class='calendar'
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png"
             alt="calendar"></a>
     
     <div class="heading_container">
         <h1 class="heading">${array[1]}</h1>
     </div>
     
     <ul class="details">
         <li>TEACHER'S NAME :- <span>${array[1]}</span> </li><br>
         <li>ID NUMBER :- <span>${array[2]}</span></li><br>
         <li>GENDER :- <span>${array[3]}</span></li><br>
         <li>SUBJECT TAKEN :- <span>${array[4]}</span></li><br>
         <li>DATE OF BIRTH :- <span>${array[5]}</span></li><br>
         <li>BLOOD GROUP :- <span>${array[6]}</span></li><br>
         <li>PHONE NUMBER :- <span>${array[7]}</span></li><br>
         <li>RESIDENTIAL ADDRESS :- <span>${array[8]}</span></li>
     
     </ul>
     
     <img class="teacher_img" src="https://sdk.bitmoji.com/render/panel/f3af4143-e643-41dd-8d37-d6b376955106-79396894-bed0-43d0-aea4-fd747de2ffcf-v1.png?transparent=1&palette=1" alt="teacher">`;
    return str;
  }

  static profileConstructor(coachName, posting) {
    let str = "";
    str = `<header>
        <div class="user">
            <img src="../assets/images/teacherlogo.png" alt="selvi">
            <h3 class="name">${coachName}</h3>
            <p class="post">${posting}</p>
        </div>
        <nav class="navbar">
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="../pages/profiles_of_teachers.html">Profile</a></li>
                <li><a href="#education">Experience</a></li>
                <li><a href="../pages/Student profile.html ">Students Profile</a></li>
    
    
            </ul>
        </nav>
    </header>
    
    <div id="menu" class="fas fa-bars"></div>
    
    <section class="home" id="home">
        <h3>HI THERE !</h3>
        <h1>I'M <span>${coachName}</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim obcaecati omnis eum quibusdam dolorum ab
            incidunt,
            harum eos quas suscipit aut aliquid, non asperiores quia dignissimos illo molestiae minus quam! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Corrupti illo et itaque, harum iure ducimus tempora at? Neque
            eum magnam iusto voluptates fuga perferendis. Perspiciatis reiciendis fugit rerum nam voluptate!</p>
    
    </section>
    
    <section class="education" id="education">
        <h1 class="heading">my <span>experience</span> </h1>
        <div class="box-container">
    
    
    
            <div class="box">
                <em class="fas fa-graduation-cap"></em>
                <span>2018</span>
                <h3>wipro</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti nihil nisi placeat velit odio
                    aliquam officia sed possimus in mollitia debitis magni, amet ducimus quaerat. Molestias, explicabo
                    voluptate. Rem!</p>
            </div>
    
            <div class="box">
                <em class="fas fa-graduation-cap"></em>
                <span>2019</span>
                <h3>zoho</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti nihil nisi placeat velit odio
                    aliquam officia sed possimus in mollitia debitis magni, amet ducimus quaerat. Molestias, explicabo
                    voluptate. Rem!</p>
            </div>
    
            <div class="box">
                <em class="fas fa-graduation-cap"></em>
                <span>2020</span>
                <h3>tcs</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti nihil nisi placeat velit odio
                    aliquam officia sed possimus in mollitia debitis magni, amet ducimus quaerat. Molestias, explicabo
                    voluptate. Rem!</p>
            </div>
    
            <div class="box">
                <em class="fas fa-graduation-cap"></em>
                <span>2021</span>
                <h3>freshworks</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deleniti nihil nisi placeat velit odio
                    aliquam officia sed possimus in mollitia debitis magni, amet ducimus quaerat. Molestias, explicabo
                    voluptate. Rem!</p>
            </div>
            
    
        </div>
        
    </section>`;
    return str;
  }
}
