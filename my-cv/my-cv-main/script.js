document.addEventListener("DOMContentLoaded", function () {
    let type = new TypeIt("#typing", {})
    for(let i=1;i<=100;i++){
        type.type('Aku developer').pause(750).delete(13).type('Suka kamu').pause(750).delete(12)
    }
    type.go()
})

let hamburger = document.getElementById('hamburger-button')
let header = document.getElementById('header')
let main = document.getElementById('main')
let backButton = document.getElementById('back-to-top')
let isHidden = 0
hamburger.addEventListener('click', function(){
    if(isHidden == 0){
        header.classList.add("hidden")
        main.classList.add('full-width')
        isHidden = 1
        hamburger.innerHTML = "<i class='fa-solid fa-bars'></i>"
    }else{
        header.classList.remove("hidden")
        main.classList.remove('full-width')
        isHidden = 0
        hamburger.innerHTML = "<i class='fa-solid fa-times'></i>"
    }
})

// Scroll Function
window.onscroll = function(){
    if (document.body.scrollTop > main.offsetTop || document.documentElement.scrollTop > main.offsetTop) {
        hamburger.classList.add('active')
        backButton.classList.add('show')
    }else{
        hamburger.classList.remove('active')
        backButton.classList.remove('show')
    }
}

// Tombol Back To Top
backButton.addEventListener('click', function(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

// Chat ke whatsapp
let whatsappButton = document.getElementById('whatsapp-button')
let message = document.getElementById('message')

message.addEventListener('keyup', function(){
    let pesan = message.value
    whatsappButton.setAttribute('href', `https://wa.me/6283891684856/?text=${pesan}`)
})