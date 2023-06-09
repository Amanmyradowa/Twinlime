const langs = document.querySelectorAll('.media_language');
for(let i =0; i<langs.length; i++){
  langs[i].addEventListener('click',function(){
    for(let i =0; i<3; i++){
      langs[i].classList.remove('active');
    }
    langs[i].classList.add('active');
  })
}

let img = document.querySelector('.menuBtn');
let navbar = document.querySelector('.navbar');
let svgs = document.querySelectorAll('.menuBtn svg')

let menuBtn = false;

img.addEventListener('click', function(){
  if (menuBtn==false){
    menuBtn=true;
    svgs[0].style.display = 'none';
    svgs[1].style.display = 'block';
    
  }else{
    svgs[1].style.display = 'none';
    svgs[0].style.display = 'block';
    menuBtn=false;
  }
  navbar.classList.toggle('active');
})

document.addEventListener('click',function(e){
  const inside = document.querySelector('.navbar').contains(e.target);
  const inside2 = document.querySelector('.menuBtn').contains(e.target);
  if(!inside && !inside2){
    menuBtn = false;
    svgs[1].style.display = 'none';
    svgs[0].style.display = 'block';
    navbar.classList.remove('active');
  }
})