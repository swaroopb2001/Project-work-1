//navbar
const toggle= document.getElementsByClassName('toggle-button')[0]
const links= document.getElementsByClassName('navbar-links')[0]

toggle.addEventListener('click', ()=>{
    links.classList.toggle('active')
})

//carousel
let f=0;
show(f);

function controller(x){
    
    f=f+x;
    show(f)
    
    
    

}




function show(num){
    let slides= document.getElementsByClassName('slide');

    if(f==slides.length){
        f=0;
        num=0;
        
    }
    if(num<0){
        f=slides.length-1;
    }

   

    for(let y of slides){
        y.style.display="none";
    }
     
    
     slides[f].style.display="block";
     
}


//sign in button


const btn= document.querySelector('#sign-in')
btn.addEventListener('click', ()=>{
    window.location.href="signin.html";
})