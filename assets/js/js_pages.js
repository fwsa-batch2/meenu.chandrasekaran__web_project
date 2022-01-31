const libraryName=localStorage.getItem("LibraryName");
switch (library){
    case "English":
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
                str+=`<li><img src=\"${i.url}\" alt=\"\"></li>`;
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
                str+=` <div class="grid-child-element orange">
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
    
                        </div>`;
                }
              }
            }
            return str;
          }
          let divAdd=addingToDiv();
          console.log(divAdd);
          document.getElementById("mainElement").innerHTML+=divAdd;
          break;
        case "LifeSkills":
            var responsiveSlider = function() {

                var slider = document.getElementById("slider");
                var sliderWidth = slider.offsetWidth;
                var slideList = document.getElementById("slideWrap");
                var count = 1;
                var items = slideList.querySelectorAll("li").length;
                var prev = document.getElementById("prev");
                var next = document.getElementById("next");
              
                window.addEventListener('resize', function() {
                sliderWidth = slider.offsetWidth;
                });
              
                var prevSlide = function() {
                if(count > 1) {
                  count = count - 2;
                  slideList.style.left = "-" + count * sliderWidth + "px";
                  count++;
                }
                else if(count = 1) {
                  count = items - 1;
                  slideList.style.left = "-" + count * sliderWidth + "px";
                  count++;
                }
                };
              
                var nextSlide = function() {
                if(count < items) {
                  slideList.style.left = "-" + count * sliderWidth + "px";
                  count++;
                }
                else if(count = items) {
                  slideList.style.left = "0px";
                  count = 1;
                }
                };
              
                next.addEventListener("click", function() {
                nextSlide();
                });
              
                prev.addEventListener("click", function() {
                prevSlide();
                });
              
                setInterval(function() {
                nextSlide()
                }, 2700);
              
                };
                window.onload = function() {
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
                          if(i.library=="ls"){
                          str+=`<li><img src=\"${i.url}\" alt=\"\"></li>`;
                        }
                        }
                      }
                      return str;
                    }
                    let addingImage=addToSlider();
                    console.log(addingImage);
                    document.getElementById("slideWrap").innerHTML+=addingImage;
                    break;
                
              
}