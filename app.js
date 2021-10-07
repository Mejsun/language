const rainbow = document.querySelector("header");

rainbow.addEventListener("mousemove",MouseEvent);
function MouseEvent(e){
  e.preventDefault();
  rainbow.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 100)"
}

const btnScrollToTop = document.querySelector(".scrollBack");

btnScrollToTop.addEventListener("click", function(){
  window.scrollTo({
    top:0, left:0, behavior:"smooth"
  })
    
  
})

const oldDiv = document.querySelector('div.subscribe');
const subscribed = document.querySelector('.send');
const newDiv = document.querySelector('div.thanks');

subscribed.addEventListener("click", function(oldDiv){
  newDiv.style.display='block';
} )


const containerIt = document.querySelector('div.containerIt');
const cardIt = document.querySelector('div.italian');
const arrowIt = document.querySelector('.containerIt::after');
const miNouns = document.querySelector('.miNouns');
const miVerbs = document.querySelector('.miVerbs')
const containerNounsIt = document.querySelector('div.containerNounsIt');
const containerVerbsIt = document.querySelector('div.containerVerbsIt');

cardIt.addEventListener("click",function(cardIt){
  containerIt.style.display='block';
  arrowIt.style.display='block';
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



const menuContainer = document.querySelector(".menu");
const items = menuContainer.querySelectorAll("li");

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    const current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
