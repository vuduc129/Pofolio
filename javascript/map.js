const hoverPlace = document.querySelector('.contact__hover')
const infoMap = document.querySelector('.contact__block')


hoverPlace.onmouseover = function(){
    infoMap.classList.add('active')
} 
hoverPlace.onmouseleave = function(){
    infoMap.classList.remove('active')
}

hoverPlace.onclick = function(){
    if(infoMap.classList.contains('active')){

        infoMap.classList.remove('active')
    }else{
        infoMap.classList.add('active')
    }
}