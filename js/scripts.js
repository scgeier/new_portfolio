$(document).ready(function(){
	console.log("scripts.js is loaded");
  $(window).load(function() {
		$(".loader-wheel").fadeToggle();
        //$(".container-fluid").toggle();
		
//Build the BufferLoader for the Web Audio API//
function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
  // Load buffer asynchronously
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  var loader = this;

  request.onload = function() {
    // Asynchronously decode the audio file data in request.response
    loader.context.decodeAudioData(
      request.response,
      function(buffer) {
        if (!buffer) {
          alert('error decoding file data: ' + url);
          return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
          loader.onload(loader.bufferList);
      },
      function(error) {
        console.error('decodeAudioData error', error);
      }
    );
  }

  request.onerror = function() {
    alert('BufferLoader: XHR error');
  }

  request.send();
}

BufferLoader.prototype.load = function() {
  for (var i = 0; i < this.urlList.length; ++i)
  this.loadBuffer(this.urlList[i], i);
}


//Load the sound FX//
var context;
var bufferLoader;
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
      context = new AudioContext();

    bufferLoader = new BufferLoader(
    context,
    [
      '../audio/rubber-sound_mixdown.mp3',
      '../audio/ding.wav',
	  '../audio/typewriter.wav'
    ],
    finishedLoading
    );

  bufferLoader.load();

var rubber;
var ding;
var typewriter;

function finishedLoading(bufferList) {
  // Create the sound sources and connect them to the speakers//
  var rubber = context.createBufferSource();
  var ding = context.createBufferSource();
  var typewriter = context.createBufferSource();
  var typewriter2 = context.createBufferSource();//you have to make a separate buffer source for each click//
  var typewriter3 = context.createBufferSource();
  var typewriter4 = context.createBufferSource();
  var typewriter5 = context.createBufferSource();
  var typewriter6 = context.createBufferSource();
  var typewriter7 = context.createBufferSource();
  
  rubber.buffer = bufferList[0];
  ding.buffer = bufferList[1];
  typewriter.buffer = bufferList[2];
  typewriter2.buffer = bufferList[2];
  typewriter3.buffer = bufferList[2];
  typewriter4.buffer = bufferList[2];
  typewriter5.buffer = bufferList[2];
  typewriter6.buffer = bufferList[2];
  typewriter7.buffer = bufferList[2];
  
  rubber.connect(context.destination);
  ding.connect(context.destination);
  typewriter.connect(context.destination);
  typewriter2.connect(context.destination);
  typewriter3.connect(context.destination);
  typewriter4.connect(context.destination);
  typewriter5.connect(context.destination);
  typewriter6.connect(context.destination);
  typewriter7.connect(context.destination);
  //rubber.start(0);
  //source2.start(0);
  //source3.start(0);



//Change the I and M to red//
function makeRed() {
    setTimeout(function(){
     document.getElementById("i").style.cssText = "color:red; font-size:1.2em; letter-spacing:2px; transition:0.2s linear;";
     document.getElementById("m").style.cssText = "color:red; font-size:1.2em; letter-spacing:2px; transition:0.2s linear;";
	 rubber.start(0);
 }, 1000);
  };

//Add the apostrophe to make 'I'm' //
function addApostrophe() {
    setTimeout(function(){
     document.getElementById("apostrophe").style.cssText = "display:inline; transition:0.5s linear;";
	 ding.start(0);
	}, 1800);
};

//Show the menu//
function showMenu() {
     setTimeout(function(){
      document.getElementById("web").innerHTML = "<a href='#top'>web</a>";
	  typewriter.start(0);
 }, 2400);
      setTimeout(function(){
      document.getElementById("writing").innerHTML = "<a href='#top'>writing</a>";
	  typewriter2.start(0);
 }, 2600);
      setTimeout(function(){
      document.getElementById("graphics").innerHTML = "<a href='#top'>graphics</a>";
	  typewriter3.start(0);
 }, 2800);
      setTimeout(function(){
      document.getElementById("audio").innerHTML = "<a href='#top'>audio</a>";
	  typewriter4.start(0);
 }, 3000);
      setTimeout(function(){
      document.getElementById("photo").innerHTML = "<a href='#top'>photo</a>";
	  typewriter5.start(0);
 }, 3200);
      setTimeout(function(){
      document.getElementById("video").innerHTML = "<a href='#top'>video</a>";
	  typewriter6.start(0);
 }, 3400);
      setTimeout(function(){
       document.getElementById("about").innerHTML = "about";
	   typewriter7.start(0);
 }, 4500);
};//showMenu();

makeRed();
addApostrophe();
showMenu();
};



$('.bxslider').bxSlider({
  mode: 'fade',
  adaptiveHeight: true,
  nextSelector: '#slider-next',
  prevSelector: '#slider-prev',
  nextText: '<i class="fa fa-arrow-circle-o-right fa-2x my-arrow" aria-hidden="true"></i>',
  prevText: '<i class="fa fa-arrow-circle-o-left fa-2x my-arrow" aria-hidden="true"></i>'
});      
        
        
 });//.load();
	

});//.ready()
