

(() =>{
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click",hideNavMenu);

    function showNavMenu(){

        navMenu.classList.add("open");
    }
    function hideNavMenu(){
        navMenu.classList.remove("open");
    }
})

