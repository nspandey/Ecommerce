const usersDatabase = [
  { username: "johnDoe", password: "123456" },
  { username: "janeDoe", password: "password" },
];

function validateSignIn() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const error = document.getElementById("sign-in-error");
  let isValid = true;

  if (!username.value.trim()) {
    username.style.border = "2px solid red";
    isValid = false;
  } else {
    username.style.border = "2px solid green";
  }

  if (!password.value.trim()) {
    password.style.border = "2px solid red";
    isValid = false;
  } else {
    password.style.border = "2px solid green";
  }

  if (!isValid) {
    error.innerText = "Both fields are required!";
    return false;
  }

  error.innerText = "";
  alert("Sign In Successful!");
  return true;
}