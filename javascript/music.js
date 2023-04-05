const audioBlock =document.querySelector('.music')
const audio = document.querySelector('.music__audio')
const playBtn = document.querySelector('.music__button-yes')
const passBtn = document.querySelector('.music__button-no')
const musicBlock = document.querySelector('.music__block')

setTimeout(()=>{
    audioBlock.classList.remove('hide')
},4000)

playBtn.onclick=function(){
    audio.play()
    audioBlock.classList.add('hide')
    musicBlock.innerText='Okay, Have A Nice Day!!'
}

passBtn.onclick=function(){
    audioBlock.classList.add('hide')
    musicBlock.innerText='Okay, Have A Nice Day!!'
}
