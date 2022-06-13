function messageMe() {
  let inputRef = document.querySelector("input");
  let outputRef = document.querySelector("div");

  // Empty validation
  if (inputRef.value == "") {
    inputRef.style.borderColor = "red";
    return;
  } else {
    inputRef.style.borderColor = "";
  }

  let newValue = "<h2 >" + inputRef.value + "</h2>";
  outputRef.innerHTML = newValue + outputRef.innerHTML;

  // clear the box
  inputRef.value = "";
}
