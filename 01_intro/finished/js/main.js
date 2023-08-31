//console.log("main.js has been loaded");

// variables, methods, functions

const firstName = "Jeff";
//console.log(firstName);

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");
//console.log(menuBtn);

// "event name", function
menuBtn.addEventListener("click", function() {
   //console.log("menu button clicked");
    mobileMenu.classList.add("active");
}); // end of menuBtn click event
closeBtn.addEventListener("click", function() {
    //console.log("menu button clicked");
    mobileMenu.classList.remove("active");
}); // end of closeBtn event listener
