function messageMe() {
  let inputRef = document.querySelector("input");
  let outputRef = document.querySelector("div");

  // Empty validation
  if (inputRef.value == "") {
    alert("Input can not be blank");
    return;
  }

  // length validation :: Min Validation
  if (inputRef.value.length <= 3) {
    alert("Min Length should be 3.");
    return;
  }

  let newValue = "<h2 >" + inputRef.value + "</h2>";
  outputRef.innerHTML = newValue + outputRef.innerHTML;

  // clear the box
  inputRef.value = "";
}
