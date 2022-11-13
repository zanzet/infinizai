window.addEventListener('DOMContentLoaded', function () {

    const scroll = document.querySelector('.scroll-btn');

    window.addEventListener('scroll', function (){

        scroll.classList.toggle('scroll-active', scrollY > 900)
    })

    scroll.addEventListener('click', function () {
  
        window.scrollTo(0, 0) 
    })
    
    new WOW().init();
})