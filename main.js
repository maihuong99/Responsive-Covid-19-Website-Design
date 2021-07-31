var menu = document.querySelector('#menu');
var nav = document.querySelector('.nav');
var links = document.querySelectorAll('.nav a');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active')
}

links.forEach(function(link){
    link.onclick = () =>{
        var parent = link.parentElement;
        for(let i=0; i<parent.children.length; i++){
            parent.children[i].classList.remove('active')
        }
        link.classList.add('active');
    }
});

