const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".sign-in form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector(
      '.sign-in input[type="text"]'
    ).value;
    const password = document.querySelector(
      '.sign-in input[type="password"]'
    ).value; 

    const loginData = {
      userName: username,
      password: password,
    };

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "landing.html";
          console.log("Login successful");
        } else {
          console.error("Login failed");
        }
      })
      .catch((error) => console.error("Error:", error));
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.querySelector("form");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector(
      'input[placeholder="Password"]'
    ).value;
    const role = document.getElementById("role").value;

    const formData = {
      userName: name,
      email: email,
      password: password,
      role: role,
    };

    fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "landing.html"; // Redirect on successful registration
          console.log("Registration successful");
        } else {
          console.error("Registration failed");
        }
      })
      .catch((error) => console.error("Error:", error));
  });
});
