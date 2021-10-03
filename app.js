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


//const thanks = document.querySelector('input[type="submit"]');
//thanks.addEventListener("click",createElement);
function createElement(){
  document.querySelector("#thankYou").innerText = "Thank You!";
  console.log("hello")
}




/*<input type="text" name="name" placeholder="Name" required>
<input type="email" name="email" placeholder="Email" required>
<button type="submit" class="send">Send</button>*/