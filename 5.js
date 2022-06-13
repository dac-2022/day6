function register() {
  let usernameRef = document.querySelector("#id1");
  let passwordRef = document.querySelector("#id2");
  let emailRef = document.querySelector("#id3");
  let mobileRef = document.querySelector("#id4");

  let outputRef = document.querySelector("#output");

  let newValue =
    "<h1> Username=" +
    usernameRef.value +
    ", Password=" +
    passwordRef.value +
    ",Email=" +
    emailRef.value +
    ", Mobile=" +
    mobileRef.value +
    "</h1>";

  outputRef.innerHTML = newValue + outputRef.innerHTML;

  // clear the inpux boxes
  usernameRef.value = "";
  passwordRef.value = "";
  emailRef.value = "";
  mobileRef.value = "";
}
