var utils = require('utils');
var _ = require('lodash');
var Phaser = require('phaser');
var {scope,game,craft} = require('./../main');

var group = craft.$g()
.$into(scope.layers.top);

var sprite = craft.$sprite('phaser')
.$set({
	x:100,
	y:100
})
.$into(group)
.$mid()
// .$tint('#FF0000');

var ball = craft.$circle({
	fill:'#00D8E0',
	size:50
}).$set({
	x:120,
	y:120,
})
.$into(scope.layers.bot)
