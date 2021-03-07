// HEADER 
const header = document.querySelector(".header");
const menuToggler = header.querySelector(".header__menu--toggler")
const megamenu = header.querySelector(".megamenu")
const closeMegaMenuBtn = header.querySelector(".close-megamenu")

menuToggler.addEventListener("click", function(){
    megamenu.classList.toggle("active")
    this.classList.toggle("active")
})

closeMegaMenuBtn.addEventListener("click", function(){
    megamenu.classList.remove("active")
})

const shoeSizes = header.querySelectorAll(".size")
let multipleSelection = false; 
let activeSelection;

shoeSizes.forEach((size) => {
    size.addEventListener("click", function(e){
        if(multipleSelection === true)
        {
            size.classList.toggle("active")
        }
        else 
        {
            size.classList.add("active")

            activeSelection = document.querySelectorAll(".size.active")

            activeSelection.forEach((active) => {
                active.classList.remove("active")
            })
            size.classList.add("active")

            activeSelection = document.querySelectorAll(".size.active")

        }
    })    
})