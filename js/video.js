var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});


//play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML = '100%';
	video.play();
});


//pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause");
	video.pause();
});


//mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){ // if statement sets conditions for also else statement
		video.muted = false;
		this.innerHTML = "Mute";
	}
	//console.log("Mute");
	else{
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});


//slower
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down" + video.playbackRate);
	video.playbackRate *= .9;
});


//faster
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up" + video.playbackRate);
	video.playbackRate /= .9;
});


//skip
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 5){
		video.currentTime += 5;
	}
	else{
		video.currentTime = 0;
		console.log("Start of Video");
	}
	console.log(video.duration)
	console.log("Current Viewing Location" + video.currentTime);
	video.play();
});


//volume slider
document.querySelector("#volumeSlider").addEventListener("click", function() {
	video.volume = this.value/100;
	volume.innerHTML = this.value+'%';
	console.log(video.volume);
});

//original
document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});

//old
document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
});

