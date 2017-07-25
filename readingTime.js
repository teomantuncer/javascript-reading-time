(function(){
	var dataReadingTime = function(string){
		"use strict";
		var time, wordPerSec = 2;
		time = (string.replace(/(<([^>]+)>)/ig,"").split(" ").length) / wordPerSec;
		if (time < 50) {
			return parseInt(((time / 10) + 1) * 10) + " second";
		} else if(time < 3600) {
			return Math.ceil(time / 60) + " minute";
		} else {
			return floor(time / 3600) + " hour";
		}
	};
})();
