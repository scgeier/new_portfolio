$(document).ready(function(){

    $(window).load(function() {
		// Animate loader off screen
		$(".loader-wheel").fadeOut();
        $(".container-fluid").toggle();
      
//Load the sound FX//
function playDing() {
      var sound = document.getElementById("ding");
          sound.load();
          sound.play();
    };

function playRubber() {
      var sound = document.getElementById("rubber");
          sound.load();
          sound.play();
    };
    
function playTypewriter() {
      var sound = document.getElementById("typewriter");
          sound.load();
          sound.play();
    };

//Change the I and M to red; only include the sound FX on desktop (they won't automatically play on iOS, anyway)//
function makeRed() {
  if (window.innerWidth > 1024) {
    setTimeout(function(){
    console.log("testing");
     playRubber();
     document.getElementById("i").style.cssText = "color:red; font-size:1.2em; letter-spacing:2px; transition:0.2s linear;";
     document.getElementById("m").style.cssText = "color:red; font-size:1.2em; letter-spacing:2px; transition:0.2s linear;";
 }, 1000);
  }else{
     setTimeout(function(){
     document.getElementById("i").style.cssText = "color:red; font-size:1.2em; letter-spacing:2px; transition:0.2s linear;";
     document.getElementById("m").style.cssText = "color:red; font-size:1.2em; letter-spacing:2px; transition:0.2s linear;";
 }, 1200);
  }

};

//Add the apostrophe to make 'I'm' //
function addApostrophe() {
  if (window.innerWidth >1024) {
     setTimeout(function(){
     document.getElementById("apostrophe").style.cssText = "display:inline; transition:0.5s linear;";
     playDing();
 }, 1800);
  }else{
     setTimeout(function(){
     document.getElementById("apostrophe").style.cssText = "display:inline; transition:0.5s linear;";
 }, 1900);
  }
};

//Show the menu//
function showMenu() {
   if(window.innerWidth > 1024){
      
     setTimeout(function(){
      document.getElementById("web").innerHTML = "<a href='#top'>web</a>";
      playTypewriter();
 }, 2400);
      setTimeout(function(){
      document.getElementById("writing").innerHTML = "<a href='#top'>writing</a>";
      playTypewriter();
 }, 2600);
      setTimeout(function(){
      document.getElementById("graphics").innerHTML = "<a href='#top'>graphics</a>";
      playTypewriter();
 }, 2800);
      setTimeout(function(){
      document.getElementById("audio").innerHTML = "<a href='#top'>audio</a>";
      playTypewriter();
 }, 3000);
      setTimeout(function(){
      document.getElementById("photo").innerHTML = "<a href='#top'>photo</a>";
      playTypewriter();
 }, 3200);
      setTimeout(function(){
      document.getElementById("video").innerHTML = "<a href='#top'>video</a>";
      playTypewriter();
 }, 3400);
      setTimeout(function(){
       document.getElementById("about").innerHTML = "about";
       playTypewriter();
 }, 4500);
}else{
     setTimeout(function(){
      document.getElementById("web").innerHTML = "<a href='#top'>web</a>";
 }, 2400);
      setTimeout(function(){
      document.getElementById("writing").innerHTML = "<a href='#top'>writing</a>";
 }, 2700);
      setTimeout(function(){
      document.getElementById("graphics").innerHTML = "<a href='#top'>graphics</a>";
 }, 3000);
      setTimeout(function(){
      document.getElementById("audio").innerHTML = "<a href='#top'>audio</a>";
 }, 3300);
      setTimeout(function(){
      document.getElementById("photo").innerHTML = "<a href='#top'>photo</a>";
 }, 3600);
      setTimeout(function(){
      document.getElementById("video").innerHTML = "<a href='#top'>video</a>";
 }, 3900);
      setTimeout(function(){
       document.getElementById("about").innerHTML = "about";
 }, 4500);
 }
};//showMenu();

makeRed();
addApostrophe();
showMenu();

console.log("scripts.js is loaded");


$('.bxslider').bxSlider({
  mode: 'fade',
  adaptiveHeight: true,
  nextSelector: '#slider-next',
  prevSelector: '#slider-prev',
  nextText: '<i class="fa fa-arrow-circle-o-right fa-2x my-arrow" aria-hidden="true"></i>',
  prevText: '<i class="fa fa-arrow-circle-o-left fa-2x my-arrow" aria-hidden="true"></i>'
});      
        
        
        
        
        
	});


});
