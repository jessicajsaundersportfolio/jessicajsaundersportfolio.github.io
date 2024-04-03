// Header Toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
}) 

// TYping effect 
let typed = new Typed('#auto-input', {
    strings: ['Student Photographer', 'Student Pilot!'],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true,
}) 

let typed2 = new Typed('#auto-input2',{
    strings: ['Let me take you on a journey through my lens, where I\'ve captured the awe-inspiring beauty of cars and planes. With every click of the shutter, I freeze moments in time, preserving the power and elegance of these machines. My photographs tell stories of speed, freedom, and the marvel of engineering. From sleek sports cars to majestic aircraft soaring through the sky, I strive to transport viewers to the heart of the action. Join me on this exhilarating ride as we explore the world of cars and planes through my lens. Let\'s inspire others to appreciate the beauty and craftsmanship that these machines embody.'],
typeSpeed: 90,
backSpeed: 90,
backDelay: 100,
loop: true,

}
)


let typed3 = new Typed('#auto-input3',{
strings: ['Student Photographer/Pilot'],       
typeSpeed: 250,
backSpeed: 250,
backDelay: 100,
}
)