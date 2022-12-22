var noOfButtonsInDrum = document.querySelectorAll(".drum").length;
for(var i = 0; i<noOfButtonsInDrum; i++)
//Event listner for click
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   var buttonInnerHtml = this.innerHTML;
   makeSound(buttonInnerHtml);
   buttonAnimation(buttonInnerHtml);


});
//Event listner for keypress
document.addEventListener("keypress",function(event){
   makeSound(event.key);
   buttonAnimation(event.key);

});
//Make sound function to Produce sound based upon innerHTML of drum class
function makeSound(key){
   switch(key){
      case "w":
          var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
          break;
       
      case "a":
         var audio = new Audio('sounds/tom-2.mp3');
         audio.play();
         break;
   
      case "s":
         var audio = new Audio('sounds/tom-3.mp3');
         audio.play();
         break;
   
      case "d":
         var audio = new Audio('sounds/tom-4.mp3');
         audio.play();
         break;
      case "j":
         var audio = new Audio('sounds/crash.mp3');
         audio.play();
         break;
      case "k":
         var audio = new Audio('sounds/snare.mp3');
         audio.play();
         break;
      case "l":
         var audio = new Audio('sounds/kick-bass.mp3');
         audio.play();
         break;
      default:
         console.log(buttonInnerHtml);
   
     }
}
function buttonAnimation(currentKey){
  var activeButton =  document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
   activeButton.classList.remove("pressed");

  },150);

}