const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click' , () => {
        nav.classList.add('active');
        
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}






let list = document.querySelectorAll('.navbar ul li a');
function active() {
    list.forEach((i) => 
        i.classList.remove('active'));
        this.classList.add('active');
}
list.forEach((i) => 
i.addEventListener('click', active));

const text = document.querySelectorAll('section');

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } 
        else {
            reveals[i].classList.remove('active');
        }
    }
}
