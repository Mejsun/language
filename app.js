const rainbow = document.querySelector("header");
const oldDiv = document.querySelector('div.subscribe');
const subscribed = document.querySelector('.send');
const newDiv = document.querySelector('div.thanks');
const btnScrollToTop = document.querySelector(".scrollBack");
const containerIt = document.querySelector('div.containerIt');
const containerFr = document.querySelector('div.containerFr');
const containerAr = document.querySelector('div.containerAr');
const containerO = document.querySelector('div.containerO');
const cardIt = document.querySelector('div.italian');
const cardFr = document.querySelector('div.french');
const cardAr = document.querySelector('div.arabic');
const cardO = document.querySelector('div.other');
const miNouns = document.querySelector('.miNouns');
const miVerbs = document.querySelector('.miVerbs')
const containerNounsIt = document.querySelector('div.containerNounsIt');
const containerVerbsIt = document.querySelector('div.containerVerbsIt');
const menuContainer = document.querySelector(".menu");
const items = menuContainer.querySelectorAll("li");


rainbow.addEventListener("mousemove",MouseEvent);
function MouseEvent(e){
  e.preventDefault();
  rainbow.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 100)"
}

btnScrollToTop.addEventListener("click", function(){
  window.scrollTo({
    top:0, left:0, behavior:"smooth"
  })
})

subscribed.addEventListener("click", function(oldDiv){
  newDiv.style.display='block';
})

cardIt.addEventListener("click",function(cardIt){
  containerIt.style.display='block';
  containerFr.style.display='none';
  containerAr.style.display='none';
  containerO.style.display='none'
})
cardFr.addEventListener("click",function(cardFr){
  containerFr.style.display='block';
  containerIt.style.display='none';
  containerAr.style.display='none';
  containerO.style.display='none'
})
cardAr.addEventListener("click",function(cardAr){
  containerAr.style.display='block';
  containerIt.style.display='none';
  containerFr.style.display='none';
  containerO.style.display='none'
})
cardO.addEventListener("click",function(cardO){
  containerO.style.display='block';
  containerAr.style.display='none';
  containerIt.style.display='none';
  containerFr.style.display='none';
})

miNouns.addEventListener('click', () =>{
  if(containerNounsIt.style.display === "none"){
    containerNounsIt.style.display="block";
    containerVerbsIt.style.display="none";
  }else{
    containerNounsIt.style.display="none";
  }
});

miVerbs.addEventListener('click', () =>{
  if(containerVerbsIt.style.display === "none"){
    containerVerbsIt.style.display="block";
    containerNounsIt.style.display="none";
  }else{
    containerVerbsIt.style.display="none";
  }
});

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    const current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
