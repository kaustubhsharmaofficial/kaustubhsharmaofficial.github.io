burger =document.querySelector('.burger')
navbar =document.querySelector('.navbar')
leftNav = document.querySelector('.left-nav')
rightNav = document.querySelector('.right-nav')

burger.addEventListener('click',()=>{
    leftNav.classList.toggle('visibileClass-res');
    rightNav.classList.toggle('visibileClass-res');
    navbar.classList.toggle('navHeight-res');
})