var _ = require('lodash');
var Phaser = require('phaser');
var utils = require('utils');

module.exports = function(){
	var {scope,game,craft} = require('./../main');

	var area = craft.$rect({
		width:game.width,
		height:game.height,
	})
	.$set({
		alpha:0,
	})
	.$into(scope.layers.top);

	utils.setBtn(area,function(){
		if(!scope.active) return;
	});
}
