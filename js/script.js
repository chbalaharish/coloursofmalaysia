// JavaScript for Navbar Scroll Effect
    window.addEventListener("scroll",function(){

        let navbar=document.querySelector(".custom-navbar");

if(window.scrollY>80){
        navbar.classList.add("navbar-scrolled");
}else{
        navbar.classList.remove("navbar-scrolled");
}

});

