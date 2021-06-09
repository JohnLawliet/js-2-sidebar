const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById("overlay")
const nav1 = document.getElementById("nav-1")
const nav2 = document.getElementById("nav-2")
const nav3 = document.getElementById("nav-3")
const nav4 = document.getElementById("nav-4")
const nav5 = document.getElementById("nav-5")
const navItems = [nav1, nav2, nav3, nav4, nav5]

const animate = (olay, slide) => {
    if (olay==="overlay-slide-left"){
        olayAlt = "overlay-slide-right"
        slideAlt = "slide-in"
    }
    else{
        olayAlt = "overlay-slide-left"
        slideAlt = "slide-out"
    }
    //Animate in overlay
    overlay.classList.replace(olay, olayAlt)
    //Slide in nav
    for (let i=0; i<5; i++)
        navItems[i].classList.replace(slide+`-${i+1}`, slideAlt+`-${i+1}`)
}

const toggleNav = () => {
    menuBars.classList.toggle('change')
    // Toggle active
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')){
        //initial loading
        animate('overlay-slide-left',"slide-out")
    }
    else{
        //exit animation
        animate('overlay-slide-right',"slide-in")
    }
}

//Event listeners
menuBars.addEventListener('click',toggleNav)
navItems.forEach((nav) => {
    nav.addEventListener('click',toggleNav)
})