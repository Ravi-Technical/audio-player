
 var play = document.querySelector('#play');
 
 var pause = document.querySelector('#pause');
 
 var audio = new Audio('./sample-15s.mp3');
 
 var range = document.querySelector(".range");
 
 var time = document.querySelector('.time');
 
 var clearID = 0;
 
 var activeTimmer = document.querySelector('.activeTimmer');
 
 var loop = document.querySelector('.loop');
 
 
 

 // Default set auido duration
 audio.addEventListener('canplaythrough', function(e){
	 time.innerHTML = audio.currentTime + ' / ' + audio.duration;
 });
 
 // Play Audio event
 audio.addEventListener('play', function(e){
	 clearID = setInterval(()=>{
		 time.innerHTML = Math.round(audio.currentTime * 100)/100 + ' / ' + Math.round(audio.duration);	
		var percent = Math.round((audio.currentTime/audio.duration)*100);
		activeTimmer.style.width = percent + "%";
		 if(activeTimmer.style.width=='100%'){
			activeTimmer.style.width = 0;
		 } 
	 },800);
	  
	 
 });
 
 audio.addEventListener('pause', function(){
	 clearInterval(clearID);
 });
 
 // Range Change detect
 range.addEventListener('change', function(e){
	 audio.volume = e.target.value;
 });

// END audio 
audio.addEventListener('ended', function(e){
	if(audio.ended){
		audio.currentTime = 0.00;
		time.innerHTML = audio.currentTime + ' / ' + audio.duration;
	}
	
	pause.style.display = 'none';
	play.style.display = 'block';
	
});

 // Audio Play
 play.addEventListener('click', function(e){
	 if(audio.paused){
		audio.play(); 
		pause.style.display = 'block';
		play.style.display = 'none';
	 }
	    		 
  });
  
  pause.addEventListener('click', function(e){
	  if(!audio.paused){
		audio.pause(); 
		pause.style.display = 'none';
		play.style.display = 'block';
	 }
	  
  });	
  
  loop.addEventListener('click', function(){
	  if(audio.loop){
		  audio.loop = false;
		  loop.innerHTML = 'ON';
		  loop.style.border = "2px solid #ddd";
	  } else {
		  // Make loop true
		  audio.loop = true;
		  loop.innerHTML = 'OFF';
		  loop.style.border = "2px solid #ff000075";
	  }
	  
  });