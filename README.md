<p align="center"><img alt="Phaser logo" src="http://i.imgur.com/FurA10V.png?1"></p>
<p align="center"><strong><sub>Phaser.io Boilerplate in Gulp ES6 (babel)</sub></strong></p>



## Features

- ES6
- [Craft.js](https://github.com/webcaetano/craft) - helper for create and extend phaser objects functions in a chainable way
- Utils.js - common gaming functions


## Installation

```
git clone git@github.com:webcaetano/phaser-boilerplate.git
cd phaser-boilerplate
npm install && bower install
```

## Usage 

#### Start Developing server

```
gulp 
```

#### Create a distribution version

```
gulp build
```


#### Deploy to gh-pages

```
gulp deploy
``` 

* *Change `gulp/build.js` adress repo `git@github.com:webcaetano/phaser-boilerplate.git` for yours*


#### Deploy to [surge](http://surge.sh)

```
gulp surge
``` 

* *Change `gulp/build.js` adress repo `domain: 'phaser-boilerplate.surge.sh'` for yours*

#### Release a patch version (it auto change package.json and bower.json)


```
gulp patch
// 1.0.0 -> 1.0.1
```

#### Release a minor version 


```
gulp minor
// 1.0.1 -> 1.1.0
```


#### Release a major version 


```
gulp major
// 1.1.0 -> 2.0.0
```

#### Example of craft.js

```javascript
var group = craft.$g(); // create a group // .$g() is alias for .$group()

var sprite = craft.$sprite('phaser') // create the sprite with key 'phaser'
.$set({
	x:100,
	y:100,
	name:'foo'
}) // set atributes based on a object
.$mid() // same as sprite.anchor.setTo(0.5)
.$into(group) // insert into group
.$tint('#FF0000'); // tint accept '#' or '' 

var ball = craft.$circle({ 
	fill:'#FF00FF',
	size:40
}) // same as game.add.graphics(0,0).beginFill(0xFF00FF).drawCircle(0,0,40)
.$set({
	x:200,
	y:200,
}) // set position
.$into(group) // insert into group
```

Result : http://phaser-boilerplate.surge.sh

#### See Also
- [**Craft**](https://github.com/webcaetano/craft)
