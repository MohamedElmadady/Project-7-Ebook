let btnShow = document.getElementById("btn-show")
let phoneLinks = document.getElementById("phone-links")
let btnHead = document.querySelectorAll(".btn-head")
let spanOne = document.getElementById("one")
let spanTwo = document.getElementById("two")
let spanThree = document.getElementById("three")
let header = document.getElementById("header")


btnShow.onclick = function () {
    phoneLinks.classList.toggle("flex")
    spanThree.classList.toggle("rotate")
    spanTwo.classList.toggle("rotate-re")
    spanOne.classList.toggle("none")
    // phoneLinks.style.display="flex" 

}




function removeadd(name) {
    phoneLinks.style.display = "none"
    for (let i = 0; i < btnHead.length; i++) {
        btnHead[i].classList.remove("active")
    }
    name.classList.add("active")
}
window.onscroll = function () {
    if (window.scrollY === 0) {
        header.classList.remove("header-scroll")
    } else {
        header.classList.add("header-scroll")
    }
}


// if (active[1])


// بدء مراقبة العنصر الهدف
 document.addEventListener("DOMContentLoaded", function() {
            const targets = [
                { id: 'intro', relatedId: 'in' },
                { id: 'chapter1', relatedId: 'ch1' },
                { id: 'chapter2', relatedId: 'ch2' },
                { id: 'chapter3', relatedId: 'ch3' },
                { id: 'chapter4', relatedId: 'ch4' }
            ];

            const observers = [];

            targets.forEach(target => {
                const targetElement = document.getElementById(target.id);
                const relatedElement = document.getElementById(target.relatedId);

                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // عندما يكون العنصر مرئيًا
                            console.log(`العنصر ${target.id} مرئي الآن!`);
                            // قم بأي إجراء تريده هنا
                            relatedElement.classList.add("done");
                        } else {
                            relatedElement.classList.remove("done");
                        }
                    });
                }, { threshold: 0.55 }); // 0.1 تعني أن العنصر يجب أن يكون مرئيًا بنسبة 10% على الأقل
                
                observers.push(observer);
                observer.observe(targetElement);
            });
        });

        
        let done = document.getElementsByClassName("done")
        

// let mo =        setInterval(function (){
        //     if (done[1].classList.contains("done") === true){
        //         done[0].classList.remove("done")
        //         // done[1]!==" "
        //     }
        //     // console.log(done)
        //     if (done[1].classList.contains("done")=== false){
        //         clearInterval(mo)
        //     }
        // },500)
document.addEventListener("DOMContentLoaded", function() {
    const home = document.getElementById('home');
    const ho = document.getElementById("ho")
            // إعداد Intersection Observer
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // عندما يكون العنصر مرئيًا
                        console.log("العنصر الهدف مرئي الآن!");
                        // قم بأي إجراء تريده هنا
                        ho.classList.add("active")
                        bo.classList.remove("active")
                    }else{
                        ho.classList.remove("active")
                    }
                });
            }, { threshold: 0.55 }); // 1.0 تعني أن العنصر يجب أن يكون مرئيًا بالكامل
            
            // بدء مراقبة العنصر الهدف
            observer.observe(home);
        });

        document.addEventListener("DOMContentLoaded", function() {
    const book = document.getElementById('book');
    // const book_cont = document.getElementById('book-cont');
    let bo = document.getElementById("bo")
            // إعداد Intersection Observer
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // عندما يكون العنصر مرئيًا
                        // قم بأي إجراء تريده هنا
                        bo.classList.add("active")
                        
                    }else{
                        // bo.classList.remove("active")
                    }
                });
            }, { threshold: 0.55 }); // 1.0 تعني أن العنصر يجب أن يكون مرئيًا بالكامل
            
            // بدء مراقبة العنصر الهدف
            observer.observe(book );
        });



document.addEventListener("DOMContentLoaded", function() {
    const author = document.getElementById('author');
    const au = document.getElementById("au")
        let bo = document.getElementById("bo")

            // إعداد Intersection Observer
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // عندما يكون العنصر مرئيًا
                        // قم بأي إجراء تريده هنا
                        au.classList.add("active")
                        bo.classList.remove("active")
                    }else{
                        au.classList.remove("active")
                    }
                });
            }, { threshold: 0.55 }); // 1.0 تعني أن العنصر يجب أن يكون مرئيًا بالكامل
            
            // بدء مراقبة العنصر الهدف
            observer.observe(author);
        });



document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.getElementById('reviews');
    const re = document.getElementById("re")
            // إعداد Intersection Observer
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // عندما يكون العنصر مرئيًا
                        // bo.classList.remove("active")
                        re.classList.add("active")
                    }else{
                        re.classList.remove("active")
                    }
                });
            }, { threshold: 0.55 }); // 1.0 تعني أن العنصر يجب أن يكون مرئيًا بالكامل
            
            // بدء مراقبة العنصر الهدف
            observer.observe(reviews);
        });

document.addEventListener("DOMContentLoaded", function() {
    const contact = document.getElementById('contact');
    const co = document.getElementById("co")
            // إعداد Intersection Observer
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // عندما يكون العنصر مرئيًا
                        // bo.classList.remove("active")
                        co.classList.add("active")
                    }else{
                        co.classList.remove("active")
                    }
                });
            }, { threshold: 0.15 }); // 1.0 تعني أن العنصر يجب أن يكون مرئيًا بالكامل
            
            // بدء مراقبة العنصر الهدف
            observer.observe(contact);
        });


        let i1 = document.getElementById("i1")
        let input = document.getElementById("moha")
        let i2 = document.getElementById("i2")
        let input2 = document.getElementById("moham")

input.addEventListener("focus" , function(){
    i1.style.display="block"
})
input.onblur = function(){
    i1.style.display="none"
    
}
input2.addEventListener("focus" , function(){
    i2.style.display="block"
})
input2.onblur = function(){
    i2.style.display="none"
    
}