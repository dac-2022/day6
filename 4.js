function message() {
  let inputRef = document.querySelector("input");
  let outputRef = document.querySelector("div");

  outputRef.innerHTML = inputRef.value;
  inputRef.value = "";
}
