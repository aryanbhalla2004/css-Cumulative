
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loading").style.display = "none";
  document.getElementById("homepage").style.display = "block";
}

