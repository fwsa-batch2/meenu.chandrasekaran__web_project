const teacher = localStorage.getItem("Teacher");
let str = "";
switch (teacher) {
  case "chitra":
    document.getElementById("teachers").innerHTML=StringConstructor.profileConstructor("Chitra","Tech Coach");
    break;
  case "raghu":
    document.getElementById("teachers").innerHTML=StringConstructor.profileConstructor("Raghu","Yoga Coach");
    break;
  case "revathi":
    document.getElementById("teachers").innerHTML=StringConstructor.profileConstructor("Revathi","ELS Coach");
    break;
  case "selvi":
    document.getElementById("teachers").innerHTML=StringConstructor.profileConstructor("Selvi","Reviewer");
    break;
}


