const library = localStorage.getItem("LibraryName");
switch (library) {
  case "English":
    document.getElementById("main_container").innerHTML =
      ConstructLibHtml.libEng();
    break;
  case "LifeSkills":
    document.getElementById("main_container").innerHTML =
      ConstructLibHtml.libLs();
    break;
  case "Tech":
    document.getElementById("main_container").innerHTML =
      ConstructLibHtml.libTech();
    break;
}
