const openBtns = document.querySelectorAll('.project__cover-btn')
const closeBtns = document.querySelectorAll('.preview__close')
const previews = document.querySelectorAll('.preview')
const base = document.querySelector('html')

Array.from(openBtns).forEach((btn,index)=>{
    btn.onclick=function(){
        Array.from(previews)[index].classList.add('active')
        base.style.overflow = 'hidden'
    }
    Array.from(closeBtns)[index].onclick=function(){
        Array.from(previews)[index].classList.remove('active')
        base.style.overflowY = 'scroll'
        base.style.overflowX = 'hidden'
    }
})
