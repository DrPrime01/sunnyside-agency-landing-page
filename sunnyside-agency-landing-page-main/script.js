//get the menu-bar button
const menuBtn = document.getElementById("menu-btn")
const dropdown = document.querySelector(".dropdown-container")

menuBtn.addEventListener("click", () => {
    dropdown.classList.toggle("show")
    console.log("click successful!")
});

// console.log("Hello!")