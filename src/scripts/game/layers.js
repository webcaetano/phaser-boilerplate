var utils = require('utils');
var _ = require('lodash');
var Phaser = require('phaser');
var {scope,game,craft} = require('./../main');


var self = scope.layers = _.reduce([
	'bot',
	'mid',
	'top',
],function(layers,layerName){
	layers[layerName] = craft.$g();
	return layers;
},{});
