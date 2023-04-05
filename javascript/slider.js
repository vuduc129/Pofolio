const title =document.querySelector('.slider__title')

const sliderContainer =document.querySelector('.slider__container')

const canvasSize = document.querySelector('canvas')

setTimeout(()=>{
    title.classList.add('active')
},1000)

sliderContainer.style.height = window.innerHeight + 'px'
canvasSize.style.height=window.innerHeight + 'px'
canvasSize.style.width=window.innerWidth + 'px'

