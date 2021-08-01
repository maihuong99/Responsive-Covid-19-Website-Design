var menu = document.querySelector('#menu');
var nav = document.querySelector('.nav');
var links = document.querySelectorAll('header .nav a');
var section = document.querySelectorAll('section');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    nav.classList.remove('active');

    section.forEach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop -150;
        let id= sec.getAttribute('id');
     
        if(top >= offset && top < offset + height){
          
            links.forEach(link =>{
                
                link.classList.remove('active');
            })
            document.querySelector('header .nav a[href*='+id+']').classList.add('active');

        }
    })
}

links.forEach(function(link){
    link.onclick = () => {
        var parent = link.parentElement;
        for(let i=0; i<parent.children.length; i++){
            parent.children[i].classList.remove('active')
        }
        link.classList.add('active');
    }
});



