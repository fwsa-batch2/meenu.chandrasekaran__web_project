
const teacher = localStorage.getItem("Teacher");
let str = "";
switch (teacher) {
  case "chitra":
    document.getElementById("teachers").innerHTML =
      StringConstructor.constructString([
        "https://www.google.com/calendar/",
        "Chitra Muthukumaran",
        "A0001",
        "Female",
        "Technical",
        "01-02-2000",
        "O+ve",
        "1234567890",
        "Chennai-600092",
      ]);

    break;
  case "raghu":
    document.getElementById("teachers").innerHTML =
      StringConstructor.constructString([
        "https://www.google.com/calendar/",
        "Raghu",
        "A0002",
        "Male",
        "Technical",
        "01-02-2000",
        "O+ve",
        "1234567890",
        "Chennai-600092",
      ]);
    break;
  case "revathi":
    document.getElementById("teachers").innerHTML =
      StringConstructor.constructString([
        "https://www.google.com/calendar/",
        "Revathi",
        "A0003",
        "Female",
        "Technical",
        "01-02-2000",
        "O+ve",
        "1234567890",
        "Chennai-600092",
      ]);
    break;
  case "selvi":
    document.getElementById("teachers").innerHTML =
      StringConstructor.constructString([
        "https://www.google.com/calendar/",
        "Selvi",
        "A0004",
        "Female",
        "Technical",
        "01-02-2000",
        "O+ve",
        "1234567890",
        "Chennai-600092",
      ]);
    break;
}
