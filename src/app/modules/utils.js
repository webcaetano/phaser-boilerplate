var self = {};

self.randomIndex = function(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}

self.extend = function(obj) {
	for (var i = 1; i < arguments.length; i++) for (var key in arguments[i]) obj[key] = arguments[i][key];
	return obj;
}

self.strstr = function(haystack, needle, bool) {
	var pos = 0;

	haystack += "";
	pos = haystack.indexOf(needle);
	if (pos == -1) return false;
	return (bool ? haystack.substr(0, pos) : haystack.slice(pos));
}

self.rand = function(min=0, max=100){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

self.toHHMMSS = function ($) {
    var sec_num = parseInt($, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours<10) hours="0"+hours;
    if (minutes<10) minutes="0"+minutes;
    if (seconds<10) seconds="0"+seconds;
    return hours+':'+minutes+':'+seconds;
}

self.loadAssets = function(game,assets){
	var i;
	for(i in assets.images) game.load.image(i, assets.images[i]);
	for(i in assets.sprites) game.load.spritesheet(i, assets.sprites[i].image, assets.sprites[i].width, assets.sprites[i].height, assets.sprites[i].frames);
}


module.exports = self;
