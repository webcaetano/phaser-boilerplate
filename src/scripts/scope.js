var _ = require('lodash');
var Phaser = require('phaser');
var utils = require('utils');

module.exports = function(){
	var {scope,game,craft} = require('./main');

	var scope = {
		active:true,
	};

	// @if !dist
	scope.dev = true;
	// @endif

	scope.setup = {
		layers:{}
	};

	var debugSetup = {

	}

	var debug = scope.debug = function(key){
		return !scope.dev || (scope.dev && !!debugSetup[key]);
	}

	return scope;
}
