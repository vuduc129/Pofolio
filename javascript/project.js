const coverTags = document.querySelectorAll('.project__cover-tags')
const wrappers = document.querySelectorAll('.project__wrapper')


Array.from(wrappers).forEach((wrapper,index)=>{
    let timer
    wrapper.onmouseenter=function(){
        timer = setTimeout(()=>{
            Array.from(coverTags)[index].classList.add('active')
        },500)
    }

    wrapper.onmouseleave=function(){
        Array.from(coverTags).forEach(cover=>{
            if(cover.classList.contains('active')){
                cover.classList.remove('active')
            }
            clearTimeout(timer)
        })
    }
})