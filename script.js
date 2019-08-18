function display() {
  var principal = document.getElementById("principal").value;
  var years = document.getElementById("years").value;
  var rate = document.getElementById("rate").value;
  var result = (principal * years * rate) / 100;
  document.getElementById("res").innerHTML = "$ " + result;
}
