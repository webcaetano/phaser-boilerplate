var utils = require('./modules/utils');
var _ = require('lodash');
var Phaser = require('phaser');


var assets = {
	images:{
		phaser:'images/phaser-dude.png'
	},
	sprites:{},
	audio:{},
	atlas:{}
}
var scope = {};

// var atlas = {};
// atlas.loading = require('./data/loading.json');
// assets.atlas['loading'] = {
// 	image:'images/loading.png',
// 	json:utils.frameAtlas(atlas.loading)
// }


module.exports = function(game,rootScope){
	var state = {};

	state.init = function(){
	}

	state.preload = function(){
		game.stage.disableVisibilityChange = false;
		game.stage.backgroundColor = '#fff';
		utils.loadAssets(game,assets);
		game.load.start();
	}

	state.create = function(){
		var sprite = utils.$newSprite(game,'phaser')
		.$set({
			x:100,
			y:100
		})
		.$tint('#FF0000');
	}

	return state;
}
