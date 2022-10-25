const preamble = document.querySelector(".preamble")
const password = document.querySelector("#password")
const confirm1 = document.querySelector("#confirm")
const password_row = document.querySelector(".password-row")
const password_match = document.querySelector(".password-match")

confirm1.addEventListener("input", (event) => {
  if (confirm1.value != password.value) {
    password_match.style.visibility = "visible";
    password.style.border = "1px solid red";
    confirm1.style.border = "1px solid red";
    confirm1.classList.add("error-item");
  }
  else {
    password_match.style.visibility = "hidden";
    password.style.border = "1px solid silver";
    confirm1.style.border = "1px solid silver";
    confirm1.classList.remove("error-item");

  }
})