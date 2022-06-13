function makeRed() {
  let ref = document.querySelector("h1");
  ref.style.color = "red";
}

function makeRedJquery() {
  // $("h1").css("color", "green");
  $("h1").css("color", "green").css("background", "yellow");
}

function makeRedJquery1() {
  $("#id1").css("color", "pink");
}
