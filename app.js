const rainbow = document.querySelector("header");
const subscribed = document.querySelector('.send');
const newDiv = document.querySelector('div.thanks');
const btnScrollToTop = document.querySelector(".scrollBack");
const card = document.querySelectorAll('.card')
const menuItem = document.querySelectorAll('.menuItem')
const inputName = document.querySelector('.name')
const inputEmail = document.querySelector('.email')


//changing background on mousem moving
rainbow.addEventListener("mousemove",MouseEvent);
function MouseEvent(e){
  e.preventDefault();
  rainbow.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 100)"
}

//scroll back to top
btnScrollToTop.addEventListener("click", function(){
  window.scrollTo({
    top:0, left:0, behavior:"smooth"
  });})

//show thank you div after subscribing
  subscribed.addEventListener("click", function(){ 
    if (inputEmail.checkValidity() && inputName.checkValidity()){
      newDiv.style.display='flex';
    } 
  })

//toggle language cards submenu
card.forEach( l => {
    l.addEventListener('click', (e) =>{
      e.preventDefault();
      let currentTab = document.querySelector(`.container${l.href.substring(l.href.indexOf('#'))}`);
      if(currentTab.classList.contains("hide")){
        document.querySelectorAll('.container').forEach(t => {
          t.classList.add("hide");
        });
        currentTab.classList.remove("hide");
      } else {
        document.querySelectorAll('.container').forEach(t => {
          t.classList.add("hide");
        }); }
  })})

//separate function for each grammar field
  menuItem.forEach( l => {
    l.addEventListener('click', (e) =>{
      if(!l.classList.contains('othertext')){
        e.preventDefault();
        let currentItem = document.querySelector(`.submenu${l.href.substring(l.href.indexOf('#'))}`);
        if(currentItem.classList.contains("hide")){
          document.querySelectorAll('.submenu').forEach(t => {
            t.classList.add("hide");
          });
          currentItem.classList.remove("hide");
        } else {
          document.querySelectorAll('.submenu').forEach(t => {
            t.classList.add("hide");
          });} 
        }
    })})

  //show which submenu item is active
  for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', function() {
    const current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}