var Phaser = require('phaser');
var _ = require('lodash');

var self = {};

self.createColorImage = function(game, source, color="#ffffff") {
	var color = Phaser.Color.hexToColor(color);

	return game.make.image(0, 0, game.add.bitmapData(source.width, source.height).fill(color.r, color.g, color.b)
	.blendDestinationAtop()
	.draw(source, 0, 0, source.width, source.height));
}

self.blink = function(game,objs,options){
	var defaults = {
		color:"#ffffff",
		count:2,
		delay:50,
	}
	options = _.extend({},defaults,options);
	var noTint = '0xffffff';
	if(!_.isArray(objs)) objs = [objs];
	_.each(objs,function(obj,i){
		var img = self.createColorImage(game,obj);
		var originalTexture = obj.texture;
		var oldTint = obj.tint;
		var c = true;

		self.repeat(game,options.delay,options.count,function(){
			if(c){
				obj.texture = img.texture;
				obj.tint = noTint;
			} else {
				obj.texture = originalTexture;
				obj.tint = oldTint;
			}
			c = !c;
		},function(){
			obj.texture = originalTexture;
			img.destroy();
		})
	})
}

self.repeat = function(game,delay,count,callback,onComplete=null,playAtStart=false){
	var timer = game.time.create(false);
	if(playAtStart) callback();
	timer.repeat(delay,playAtStart ? count-1 : count,callback)
	timer.start();
	timer.onComplete.addOnce(function(){
		if(onComplete) onComplete();
		timer.destroy();
	});
}

self.loopUntil = function(game,delay,until,callback,onComplete=null){
	var timer = game.time.create(false);
	timer.loop(delay,callback)
	timer.start();
	timer.add(until,function(){
		if(onComplete) onComplete();
		timer.destroy();
	})
}

self.ninePatch = function(game,options){
	options = _.extend({},{width:100,key:"9window_",height:100},options);
	var group = game.add.group();
	var i = 1;
	var slices = [];
	var cSlot = 0;

	_.each([-1,0,1],function(cVal,c){ // cols
		var rSlot = 0;
		_.each([-1,0,1],function(rVal,r){ // rows
			var slicez = game.make.sprite(0,0,'gui');
			slicez.frameName = options.key+i+_.padLeft(1,4,'0');
			var slice = group.add(game.add.tileSprite(0,0,slicez.width,slicez.height,'gui',options.key+i+_.padLeft(1,4,'0')));
			slicez.destroy();

			slice.x = Math.ceil(rSlot+(rVal==-1 ? -slice.width : 0)+(rVal==1 ? options.width : 0))-r;
			slice.y = Math.ceil(cSlot+(cVal==-1 ? -slice.height : 0)+(cVal==1 ? options.height : 0))-c;
			if(rVal===0) slice.width = options.width;
			if(cVal===0) slice.height = options.height;
			slices.push(slice);
			i++;
		});
	});
	return group;
}

self.randInRange = function(point,range){
	var a = self.rand(0,360) * (Math.PI / 180);
	var d = self.rand(0,(range/2));
	return {
		x:Math.cos(a) * d,
		y:Math.sin(a) * d
	}
}

self.rand = function(min=0, max=100){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

self.getRangeIndexByValue = function(length,current,modes,ASC=true){
	if(current>=length) return modes;
	if(current<=0) return 1;
	if(ASC) {
		return Math.ceil(current/Math.floor(length/modes));
	} else {
		return Math.ceil((length-current)/Math.floor(length/modes));
	}
}

self.getModeByValue = function(length,current,modes,ASC=true){
	return modes[self.getRangeIndexByValue(length,current,modes.length,ASC)-1];
}

self.randPorRange = function(val,por){
	var part = Math.ceil(val*por/100);
	return self.rand(val-part,val+part);
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

self.renameAttr = function(obj,name,replace){
	obj[replace] = obj[name];
	delete obj[name];
	return obj;
}

self.frameAtlas = function(atlas){
	var add = {
		rotated:false,
		trimmed:true
	}

	var frames = [];
	_.forEach(atlas.sprites,function(sprite,spriteName){
		var c = 0;
		_.forEach(sprite.frames,function(frame,k){
			frame = _.extend(frame,add);
			frame = self.renameAttr(frame,'s','spriteSourceSize')
			frame = self.renameAttr(frame,'f','frame')

			frame.sourceSize = {
				w:frame.spriteSourceSize.w,
				h:frame.spriteSourceSize.h
			}

			if(frame.r){
				for(var i=0;i<frame.r;i++) {
					var clone = _.clone(frame);
					clone.filename = spriteName+_.padLeft(++c, 4, '0');
					frames.push(clone);
				}
			} else {
				frame.filename = spriteName+_.padLeft(++c, 4, '0');
				frames.push(frame);
			}
		});
	});

	atlas.frames = frames;
	return _.omit(atlas,['sprites']);
}

self.ifTrue = function($,def=null){
	return $ ? $ : def;
}

self.loadAssets = function(game,assets){
	var i;
	for(i in assets.atlas) {
		game.load.atlasJSONHash(i, assets.atlas[i].image, self.ifTrue(assets.atlas[i].jsonUrl), self.ifTrue(assets.atlas[i].json));
	}
	for(i in assets.images) game.load.image(i, assets.images[i]);
	for(i in assets.sprites) game.load.spritesheet(i, assets.sprites[i].image, assets.sprites[i].width, assets.sprites[i].height, assets.sprites[i].frames);
	for(i in assets.audio) game.load.audio(i, assets.audio[i]);
}

self.copyPos = function(obj1,obj2){
	obj1.x=obj2.x;
	obj1.y=obj2.y;
}

self.$newSprite = function(game,key,options){
	var defaults = {
		x:0,
		y:0,
		frame:undefined,
		group:undefined
	};
	options = _.extend({},defaults,options);
	var tmpObj = game.add.sprite(options.x,options.y,key,options.frame,options.group);
	// prototypes
	tmpObj.$set = function(prop,val){
		if(typeof prop==='string' && !!val){
			this[prop]=val;
		} else {
			for(var i in prop){
				if(i.indexOf('.')==-1){
					this[i]=prop[i];
				} else {
					var pathObj = i.split(".");
					var c = this;
					for(var k=0;k<pathObj.length-1;k++) c=c[pathObj[k]];
					c[pathObj[pathObj.length-1]]=prop[i];
				}
			}
		}
		return this;
	};

	tmpObj.$tint = function(color='ffffff'){
		this.tint = '0x'+color.replace(/#/g,'');
		return this;
	}

	tmpObj.$into = function(group){
		group.add(this);
		return this;
	};

	tmpObj.$mid = function(){
		this.anchor.setTo(0.5);
		return this;
	}

	tmpObj.$atlasImg = function(name,frame=1){
		this.frameName = name+_.padLeft(frame,4,'0');
		return this;
	}

	tmpObj.$atlasAnims = function(name,anims){
		self.loadAltasAnimation(this,name,anims);
		return this;
	}

	tmpObj.$fixPos = function(){
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this;
	}

	tmpObj.$copyPos = function(target){
		this.x = target.x;
		this.y = target.y;
		return this;
	};

	return tmpObj;
}

self.setAtlasFrame = function(objs,frame=0,name=''){
	if(!_.isArray(objs)) objs = [objs];
	_.map(objs,function(obj,k){
		if(!obj.name) console.error('object without name');
		obj.frameName = obj.name+_.padLeft(frame,4,'0');
	})
	return objs;
}

self.loadAltasAnimation = function(obj,name,anims,repeat={}){
	_.each(anims,function(animation,k){
		obj.animations.add(k, Phaser.Animation.generateFrameNames(name, animation.start, animation.end, '', 4), animation.rate, (repeat[k] ? true : false));
	})
}

self.por = function(val,por,plus=true,fix=0){
	return Number(((val * por / 100)*(plus ? 1 : -1)+val).toFixed(fix));
}

self.dist = function(obj1,obj2){
	return Math.sqrt(Math.pow(obj1.x-obj2.x,2)+Math.pow(obj1.y-obj2.y,2));
}

self.setBtn = function(obj,callback=null){
	if(!obj) return;
	if(!obj.inputEnabled) obj.inputEnabled = true;
	if(!obj.input) return;
	// obj.input.pixelPerfectClick = true;
	// obj.input.pixelPerfectOver = true;
	obj.input.useHandCursor = true;
	if(callback){
		obj.events.onInputUp.add(function(e){
			callback.apply(this,[e]);
		});
	}
	return obj;
}

self.setHover = function(obj,callback=null,callback2=null){
	if(!obj) return;
	if(!obj.inputEnabled) obj.inputEnabled = true;
	if(!obj.input) return;
	obj.input.useHandCursor = true;
	if(callback){
		obj.events.onInputOver.add(function(e){
			callback.apply(this,[e]);
		});
	}
	if(callback2){
		obj.events.onInputOut.add(function(e){
			callback2.apply(this,[e]);
		});
	}
	return obj;
}

self.btnAudio = function(obj,audioHover=null,audioClick=null){
	if(!obj.inputEnabled) obj.inputEnabled = true;
	if(audioHover){
		obj.events.onInputOver.add(function(e){
			audioHover.play();
		});
	}
	if(audioClick){
		obj.events.onInputUp.add(function(e){
			audioClick.play();
		});
	}
	return obj;
}

module.exports = self;
