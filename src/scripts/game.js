var utils = require('utils');
var _ = require('lodash');
var Phaser = require('phaser');
var main = require('./main');
var {scope,game,craft} = require('./main');

module.exports = function(){
	var state = {};

	state.init = function(){
		main.scope = require('./scope')();
	}

	state.preload = function(){
		game.stage.disableVisibilityChange = false;
		game.stage.backgroundColor = '#fff';
		game.load.start();
	}

	state.create = function(){
		require('./game/layers')();
		require('./game/controllers')();
		require('./game/events')();
		require('./game/test')();
	}

	return state;
}
