// =
/******************* TASK 1 ********************/
function liveAlert() {
  document.getElementById("alert").style.display = "block";
}

function abc() {
  document.getElementById("alert").style.display = "none";
}

/******************* TASK 2 ********************/

function para_hide() {
  // console.log(document.querySelectorAll("p"));
  // console.log(document.querySelectorAll("#accordian p"));  // my way
  var para = document.querySelectorAll(".accordianpara");
  for (i = 0; i < para.length; i++) {
    // console.log(i);
    // console.log(para[i]);
    para[i].style.display = "none";
  }
}

function show_para(current_para) {
  // console.log(current_para);
  var ans = current_para.nextElementSibling.style.display;
  // console.log(ans);

  current_para.nextElementSibling.style.display = "block";
  if (ans == "none") {
  } else {
    current_para.nextElementSibling.style.display = "none";
  }
}

/******************* TASK 3 ********************/

function fun3() {
  var userInput = document.getElementById("text").value;
  var lower_case = userInput.toLowerCase();
  if (
    lower_case == "january" ||
    lower_case == "march" ||
    lower_case == "may" ||
    lower_case == "july" ||
    lower_case == "august" ||
    lower_case == "october" ||
    lower_case == "december"
  ) {
    var oddNo = lower_case + " has 31 days";
    document.getElementById("Monthdiv").innerText = oddNo;
  } else if (
    lower_case == "april" ||
    lower_case == "june" ||
    lower_case == "september" ||
    lower_case == "november"
  ) {
    var evenNo = lower_case + " has 30 days";
    document.getElementById("Monthdiv").innerText = evenNo;
  } else if (lower_case == "february") {
    document.getElementById("Monthdiv").innerText = lower_case + " has 28 days";
  } else {
    document.getElementById("Monthdiv").innerText =
      "This is not a month name!! Please Check";
  }
}

/******************* TASK 4 ********************/

function showoutput(output) {
  document.getElementById("blank2").innerText = output;
}
function fun4(a, b, c) {
  var a = parseInt(document.getElementById("text1").value);
  var b = parseInt(document.getElementById("text2").value);
  var c = parseInt(document.getElementById("text3").value);
  // console.log(a);
  // console.log(b);
  // console.log(c);
  if (
    a * a == b * b + c * c ||
    b * b == c * c + a * a ||
    c * c == b * b + a * a
  ) {
    showoutput("It is a Right angle Triangle");
  } else if (a == b && b == c) {
    showoutput("It is a Equilateral Triangle");
  } else if (a == b || b == c || a == c) {
    showoutput("It is a Isosceles Triangle");
  } else {
    showoutput("It is a Scalen Triangle");
  }
}
