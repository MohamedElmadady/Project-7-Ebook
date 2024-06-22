let btnShow = document.getElementById("btn-show")
let phoneLinks = document.getElementById("phone-links")
let btnHead = document.querySelectorAll(".btn-head")
let spanOne = document.getElementById("one")
let spanTwo = document.getElementById("two")
let spanThree = document.getElementById("three")
let header = document.getElementById("header")


btnShow.onclick= function(){
    phoneLinks.classList.toggle("flex")
    spanThree.classList.toggle("rotate")
    spanTwo.classList.toggle("rotate-re")
    spanOne.classList.toggle("none")
    // phoneLinks.style.display="flex" 
    
}




function removeadd(name){
    phoneLinks.style.display="none" 
    for(let i = 0 ; i<btnHead.length ; i++){
        btnHead[i].classList.remove("active")
    }
    name.classList.add("active")
}
window.onscroll=function(){
    if (window.scrollY === 0){
        header.classList.remove("header-scroll")
    }else {
        header.classList.add("header-scroll")
    }
}