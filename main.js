

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

(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click",(event) =>{
       
        if(event.target.classList.contains("tab-item") &&
        !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");

            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");

            
            event.target.classList.add("active","outer-shadow");

            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");


        }
    })
})();
// uncomment later
function bodyscrollingToggle(){
    document.body.classList.toggle("hidden-scrolling")

}


(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    popup = document.querySelector(".portflio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex, screenshots;

    filterContainer.addEventListener("click",(event)=>{
        if(event.target.classList.contains("filter-item") &&
        !event.target.classList.contains("active")){
         filterContainer.querySelector(".active").classList.remove("outer-shadow","active"); 
         event.target.classList.add("active","outer-shadow");
        const target = event.target.getAttribute("data-target");
        portfolioItems.forEach((item) =>{
            if(target === item.getAttribute("data-category") || target === 'all'){
                item.classList.remove("show");
                item.classList.add("hide");
            }
            else{
                item.classList.remove("show")
                item.classList.add("hide")
            }
        })
        }
       
    
      
})
portfolioItemsContainer.addEventListener("click",(event) =>{
    if(event.target.closest(".portfolio-item-inner")){
        const portfolioItem = event.target.closest(".portfolio-item-inner").parentElement;
        // get the portfolio item index
        itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
        screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");

        screenshots = screenshots.split(",");
        if(screenshots.length === 1){
            prevBtn.style.display="none"
            nextBtn.style.display="none"

        }
        else{
         prevBtn.style.display="block";
         nextBtn.style.display="block"   
        }
        slideIndex = 0;
        popupToggle();
        popupSlideshow();
        popupDetails();
    }
})
closeBtn.addEventListener("click", () =>{
    popupToggle();
    if(projectDetailsContainer.classList.contains("active")){
        popupDetailsToggle();
    }
})

function popupToggle(){
    popup.classList.toggle("open");
    bodyscrollingToggle();
}


function popupSlideshow(){
    const imgsrc = screenshots[slideIndex];
    const popupImg = popup.querySelector(".pp-img");
    
    popup.querySelector(",pp-lader").classList.add("active")
    popupImg.src=imgsrc;
    popupImg.onload = () =>{
    
        popup.querySelector(".pp-loader").classList.remove("active");
    }
    popup.querySelector(".pp-counter").innerHTML = (slideIndex+1) + " of " + screenshots.length;
}
    
 nextBtn.addEventListener("click", () =>{
    if(slideIndex === screenshots.length-1){
        slideIndex = 0;
    }
    else{
        slideIndex++;
    }
    popupSlideshow();
    
 })
 prevBtn.addEventListener("click", () =>{
    if(slideIndex === 0){
        slideIndex = screenshots.length-1
    }
    else{
        slideIndex--;
    }
    popupSlideshow();
    

 })
 function popupDetails(){
if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
    projectDetailsBtn.style.display="none";
    return;
    


}
projectDetailsBtn.style.display="block";


    // get the project details
    const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
    popup.querySelector(".pp-project-details").innerHTML = details;
    const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
    popup.querySelector(".pp-title h2").innerHTML = title;
    const category = portfolioItems[itemIndex].getAttribute("data-category");
    popup.querySelector("").innerHTML = category.split("").join;

   
    
    

 }
 projectDetailsBtn.addEventListener("click",() =>{
    popupToggle();
 })

 function popupDetailsToggle(){
  if(projectDetailsContainer.classList.contains("active")){
    projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
    projectDetailsBtn.querySelector("i").classList.add("fa-plus");
    projectDetailsContainer.classList.remove("active");
    projectDetailsContainer.style.maxHeight = 0 + "px"

  }
  else{
    projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
    projectDetailsBtn.querySelector("i").classList.add("fa-minus");
    projectDetailsContainer.classList.add("active");
    projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
    popup.scrollTo(0,projectDetailsContainer.offsetTop);
  }

 }
})();





// hide all sections except active

(() =>{
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
            
        
    }
})
})
















