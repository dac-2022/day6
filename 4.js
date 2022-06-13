function message() {
  let inputRef = document.querySelector("#input1");
  let outputRef = document.querySelector("div");

  outputRef.innerHTML = inputRef.value;
  inputRef.value = "";
}
