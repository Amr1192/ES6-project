// ================= LOGIN & REGISTER FUNCTIONALITY =================

// Selecting popup elements
const login_btn = document.getElementById("login-btn");
const loginPopup = document.getElementById("login");
const registerPopup = document.getElementById("register");
const login_close_btn = document.querySelector(".login-close-btn");
const register_close_btn = document.querySelector(".register-close-btn");
const login_1 = document.getElementById("login1");
const signup1 = document.getElementById("sign-up1");

// Selecting input fields (for login and register)
const loginEmailInput = document.getElementById("login-email");
const loginPasswordInput = document.getElementById("login-password");
const registerUsernameInput = document.getElementById("username");
const registerEmailInput = document.getElementById("email");
const registerPasswordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

// Selecting error message elements
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const loginEmailError = document.getElementById("login-email-error");
const loginPasswordError = document.getElementById("login-password-error");

// Regex patterns
const usernamePattern = /^[a-zA-Z\s]{6,}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

// Show Login Popup
login_btn.addEventListener("click", () => {
  loginPopup.style.display = "block";
  registerPopup.style.display = "none";
});

// Close Popups
login_close_btn.addEventListener("click", () => {
  loginPopup.style.display = "none";
});
register_close_btn.addEventListener("click", () => {
  loginPopup.style.display = "none";
  registerPopup.style.display = "none";
});

// Switch between Popups
signup1.addEventListener("click", () => {
  loginPopup.style.display = "none";
  registerPopup.style.display = "block";
});
login_1.addEventListener("click", () => {
  loginPopup.style.display = "block";
  registerPopup.style.display = "none";
});

// REGISTER FORM VALIDATION
const registerForm = document.getElementById("registerForm") || registerPopup.querySelector("form");
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = registerUsernameInput.value.trim();
  let email = registerEmailInput.value.trim();
  let password = registerPasswordInput.value.trim();
  let confirmPass = confirmPasswordInput.value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let isValid = true;

  // Reset error messages
  if (nameError) nameError.style.display = "none";
  emailError.style.display = "none";
  passwordError.style.display = "none";
  confirmPasswordError.style.display = "none";

  // Check if email is already registered
  if (users.some(user => user.email === email)) {
    alert("Email already registered");
    return;
  }

  // Validate username
  if (!usernamePattern.test(username)) {
    if (nameError) nameError.style.display = "block";
    isValid = false;
  } else {
    if (nameError) nameError.style.display = "none";
  }

  // Validate email
  if (!emailPattern.test(email)) {
    emailError.style.display = "block";
    isValid = false;
  }

  // Validate password
  if (!passwordPattern.test(password)) {
    passwordError.style.display = "block";
    isValid = false;
  }

  // Validate confirm password
  if (password !== confirmPass) {
    confirmPasswordError.style.display = "block";
    isValid = false;
  }

  if (!isValid) return;

  // Save new user
  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");
  loginPopup.style.display = "block";
  registerPopup.style.display = "none";
});

// LOGIN FORM VALIDATION
const loginForm = document.getElementById("loginForm") || loginPopup.querySelector("form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let enteredEmail = loginEmailInput.value.trim();
  let enteredPassword = loginPasswordInput.value.trim();
  let foundUser = users.find(user => user.email === enteredEmail);

  // Reset error messages
  loginEmailError.style.display = "none";
  loginPasswordError.style.display = "none";

  if (!foundUser) {
    loginEmailError.textContent = "Incorrect email or password";
    loginEmailError.style.display = "block";
    return;
  }

  if (foundUser.password !== enteredPassword) {
    loginPasswordError.textContent = "Incorrect email or password";
    loginPasswordError.style.display = "block";
    return;
  }

  localStorage.setItem("username", foundUser.username);

  alert("Login successful!");
  window.location.href = "index2.html";
});

// selecting product categories
const all = document.getElementsByClassName("cards")
const clothes = document.getElementsByClassName("clothes-category")
const electronics = document.getElementsByClassName("electronics-category")
const perfumes = document.getElementsByClassName("perfumes-category")
const food = document.getElementsByClassName("food-category")
const all_btn = document.getElementById("all-products")
const clothes_btn = document.getElementById("clothes-category")
const electronics_btn = document.getElementById("electronics-category")
const perfumes_btn = document.getElementById("perfumes-category")
const food_btn = document.getElementById("food-category")





// ================= SLIDER FUNCTIONALITY =================
document.addEventListener("DOMContentLoaded", function () {
  let clickLeft = document.getElementById("clickLeft");
  let clickRight = document.getElementById("clickRight");
  let sliderImg = document.getElementById("sliderImg");
  let toggleAutoPlayBtn = document.getElementById("toggleAutoPlay");

  let images = [
    "images/clothes.webp",
    "images/cologne.jpg",
    "images/food.jpg",
    "images/elec.webp"
  ];

  let index = 0;
  let autoPlay = true;
  let myInterval;

  function updateImage() {
    sliderImg.setAttribute("src", images[index]);
  }

  function clickPrevious() {
    index = (index - 1 + images.length) % images.length;
    updateImage();
  }

  function clickNext() {
    index = (index + 1) % images.length;
    updateImage();
  }

  function startAutoPlay() {
    myInterval = setInterval(clickNext, 2000);
  }

  function stopAutoPlay() {
    clearInterval(myInterval);
  }

  function toggleAutoPlay() {
    autoPlay = !autoPlay;
    if (autoPlay) {
      startAutoPlay();
      if (toggleAutoPlayBtn) toggleAutoPlayBtn.textContent = "Pause";
    } else {
      stopAutoPlay();
      if (toggleAutoPlayBtn) toggleAutoPlayBtn.textContent = "Start";
    }
  }

  clickLeft.addEventListener("click", clickPrevious);
  clickRight.addEventListener("click", clickNext);
  if (toggleAutoPlayBtn) {
    toggleAutoPlayBtn.addEventListener("click", toggleAutoPlay);
  }
  startAutoPlay();
});


// showing certain category

food_btn.addEventListener("click", ()=> {
for (let i =0; i<2; i++)
{
    food[i].style.display="block"
    clothes[i].style.display="none"
    perfumes[i].style.display="none"
    electronics[i].style.display="none"
}
})
clothes_btn.addEventListener("click", ()=> {
for (let i =0; i<2; i++)
{
    food[i].style.display="none"
    clothes[i].style.display="block"
    perfumes[i].style.display="none"
    electronics[i].style.display="none"
}
})
electronics_btn.addEventListener("click", ()=> {
for (let i =0; i<2; i++)
{
    food[i].style.display="none"
    clothes[i].style.display="none"
    perfumes[i].style.display="none"
    electronics[i].style.display="block"
}
})
perfumes_btn.addEventListener("click", ()=> {
for (let i =0; i<2; i++)
{
    food[i].style.display="none"
    clothes[i].style.display="none"
    perfumes[i].style.display="block"
    electronics[i].style.display="none"
}})
all_btn.addEventListener("click", ()=> {
for (let i =0; i<2; i++)
{
    food[i].style.display="block"
    clothes[i].style.display="block"
    perfumes[i].style.display="block"
    electronics[i].style.display="block"
}
})


