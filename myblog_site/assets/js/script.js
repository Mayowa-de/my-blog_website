document.addEventListener("DOMContentLoaded", function(){
const backTopBtn= document.getElementById('backTopBtn')

window.addEventListener('scroll', function(){
    if (window.scrollY > 2300 ){
        backTopBtn.style.display="block"
    }else{
        backTopBtn.style.display="none"
    }
})

backTopBtn.addEventListener('click', function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})

const container =document.querySelector('.topic-sub-container')
const backBtn= document.getElementById('btn-back')
const forwardBtn=document.getElementById('btn-forward')

let scrollPos= 0;
const cardWidth=container.children[0].offsetWidth +  10;
const maxScroll = cardWidth * (container.children.length - 3)

forwardBtn.addEventListener('click', ()=>{
    if(scrollPos < maxScroll){
        scrollPos +=cardWidth;
        container.style.transform = `translateX(-${scrollPos}px)`

    }
})
backBtn.addEventListener('click', ()=>{
    if(scrollPos>0){
        scrollPos -=cardWidth;
        container.style.transform=`translateX(-${scrollPos}px)`
    }
        })

//template_u8phb78
//Mayor_tech blog
const emailAddress =document.getElementById('email').value

document.getElementById('EmailBtn').addEventListener('submit', (e)=>{
    e.preventDefault()


emailjs.send('Mayor_tech blog', 'template_u8phb78',{
    user_email: emailAddress}).then(function(response){
        alert('Successfully Subscribed')
    })
})

})
