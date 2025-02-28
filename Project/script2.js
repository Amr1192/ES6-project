let logo = document.getElementById("logo")
document.addEventListener("DOMContentLoaded", () => {
    let username = localStorage.getItem("username");
    if (username) {
        alert (`hello ${username}`) 
       logo.innerText = username
    }
});

let logout = document.getElementById("logout-btn")
logout.addEventListener("click", ()=> {
    window.location.href ="index.html"
})

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

    function addToCart(title, image, price) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let item = cart.find(i => i.title === title);
    
      if (item) {
        item.quantity++;
      } else {
        cart.push({ title, image, price, quantity: 1 });
      }
    
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${title} added to cart!`);
    }