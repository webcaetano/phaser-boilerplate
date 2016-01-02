'use strict';

require('./modules/stats')();
var utils = require('./modules/utils');
var _ = require('lodash');
var Phaser = require('phaser');

var game;
var self = {};

var options = {
	width:500,
	height:400,
	where:'wizz-canvas'
}

game = new Phaser.Game(options.width, options.height, Phaser.AUTO, options.where, options.where);
game.state.add('game', {
	preload:function preload(){
		game.stage.backgroundColor = '#fff';
	},
	create:function create(){
	},
	update:function update(){
	}
});


game.state.start('game');
