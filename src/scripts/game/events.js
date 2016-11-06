var _ = require('lodash');
var Phaser = require('phaser');

module.exports = function(){
	var {scope,game,craft} = require('./../main');
	var self = scope.events = _.transform([
		'start',
	],function(resp,val,i){
		resp[val] = new Phaser.Signal;
	},{});

	self.start.add(function(){
	});



}
