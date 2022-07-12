function checkDate() {
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var check = true;
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    if (0 < day && day <= 31) {
      check = true;
    } else {
      check = false;
    }
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    if (0 < day && day <= 30) {
      check = true;
    } else {
      check = false;
    }
  } else if (month == 2) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      if (0 < day && day <= 29) {
        check = true;
      } else {
        check = false;
      }
    } else {
      if (0 < day && day <= 28) {
        check = true;
      } else {
        check = false;
      }
    }
  } else {
    check = false;
  }
  if (day == "" || month == "" || year == "") {
    document.getElementById("result").innerHTML =
      "Please fill in the empty field";
  } else if (check == true) {
    document.getElementById("result").innerHTML =
      day + "/" + month + "/" + year + " is valid!!";
    day = document.getElementById("day").textContent;
  } else {
    document.getElementById("result").innerHTML =
      day + "/" + month + "/" + year + " is invalid!!";

    // document.getElementById("day").innerHTML = day;
    // document.getElementById("month").value = "";
    // document.getElementById("year").value = "";
  }
}
