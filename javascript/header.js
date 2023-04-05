const headerItems = document.querySelectorAll('.header__item')

const slider = document.querySelector('.slider')

Array.from(headerItems).forEach((item)=>{
    item.onclick=function(){
        document.querySelector('.header__item.active').classList.remove('active')
        item.classList.add('active')
    }
})

window.addEventListener('scroll',function(){
    if(this.window.scrollY>= 700 && this.window.scrollY <= 1500 ){
        Array.from(headerItems)[0].classList.add('active')
        Array.from(headerItems)[1].classList.remove('active')
    }
    if(this.window.scrollY>= 1501 && this.window.scrollY <= 2400 ){
        Array.from(headerItems)[0].classList.remove('active')
        Array.from(headerItems)[1].classList.add('active')
        Array.from(headerItems)[2].classList.remove('active')
    }
    if(this.window.scrollY > 2400 ){
        Array.from(headerItems)[1].classList.remove('active')
        Array.from(headerItems)[2].classList.add('active')
    }
})


const openMenu = document.querySelector('.header__menu-open')
const closeMenu = document.querySelector('.header__menu-close')
const header = document.querySelector('.header')

openMenu.onclick=function(){
    header.classList.add('active')
}

closeMenu.onclick=function(){
    header.classList.remove('active')
}

