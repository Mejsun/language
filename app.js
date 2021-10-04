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



