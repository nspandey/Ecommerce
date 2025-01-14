function validateSignUp() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const error = document.getElementById("sign-up-error");
    let isValid = true;

    // Validate Name
    if (!name.value.trim()) {
      name.style.border = "2px solid red";
      isValid = false;
    } else {
      name.style.border = "2px solid green";
    }

    // Validate Email
    if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
      email.style.border = "2px solid red";
      isValid = false;
    } else {
      email.style.border = "2px solid green";
    }

    // Validate Phone
    if (!/^\d{10}$/.test(phone.value.trim())) {
      phone.style.border = "2px solid red";
      isValid = false;
    } else {
      phone.style.border = "2px solid green";
    }

    // Validate Address
    if (!address.value.trim()) {
      address.style.border = "2px solid red";
      isValid = false;
    } else {
      address.style.border = "2px solid green";
    }

    if (!isValid) {
      error.innerText = "All fields are required!";
      return false;
    }

    error.innerText = "";
    alert("Sign Up Successful!");
    return true;
  }