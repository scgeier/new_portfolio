$(document).ready(function(){
      
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

//Change the I and M to red//
function makeRed() {
    setTimeout(function(){
      console.log("testing");
     playRubber();
     document.getElementById("i").style.cssText = "color:red; font-size:1.2em; letter-spacing:2px; transition:0.2s linear;";
     document.getElementById("m").style.cssText = "color:red; font-size:1.2em; letter-spacing:2px; transition:0.2s linear;";
 }, 1000);
};

//Add the apostrophe to make 'I'm' //
function addApostrophe() {
   setTimeout(function(){
     document.getElementById("apostrophe").style.cssText = "display:inline; transition:0.5s linear;";
     playDing();
 }, 1800);
};

//Show the menu//
function showMenu() {    
     setTimeout(function(){
      document.getElementById("web").innerHTML = "web";
      playTypewriter();
 }, 2400);
      setTimeout(function(){
      document.getElementById("writing").innerHTML = "writing";
      playTypewriter();
 }, 2600);
      setTimeout(function(){
      document.getElementById("graphics").innerHTML = "graphics";
      playTypewriter();
 }, 2800);
      setTimeout(function(){
      document.getElementById("audio").innerHTML = "audio";
      playTypewriter();
 }, 3000);
      setTimeout(function(){
      document.getElementById("photo").innerHTML = "photo";
      playTypewriter();
 }, 3200);
      setTimeout(function(){
      document.getElementById("video").innerHTML = "video";
      playTypewriter();
 }, 3400);
      setTimeout(function(){
       document.getElementById("about").innerHTML = "about";
       playTypewriter();
 }, 4500);
};

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
