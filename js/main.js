
// --------------------about section tab------------------- //


(()=>{
    const aboutSection = document.querySelector('.about-section'),
    tabsContainer = document.querySelector(".about-tab");

    tabsContainer.addEventListener("click", (event)=>{
        /*if event.target contains"tab-item" &&
         not contains"active" class*/
        if(event.target.classList.contains("tab-item") &&
         !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            // deactive existing active 'tab-item'
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            // ACTIVE NEW 'tab-item'
            event.target.classList.add("active","outer-shadow");
            // deactivete existing active 'tab-content'
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // active new 'tab-content'
            aboutSection.querySelector(target).classList.add("active")
        }
    })
})();

var navmanu = document.querySelector(".nav-menu")
var open = document.querySelector(".hamburger-btn")
var close = document.querySelector(".close-nav-menu")
console.log(close)
open.addEventListener("click",function(){
    navmanu.style.visibility = "visible";
})
close.addEventListener("click",function(){
    navmanu.style.visibility = "hidden";
})


















































