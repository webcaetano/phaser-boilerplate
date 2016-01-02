![Phaser Logo](http://i.imgur.com/FurA10V.png?1)

[@webcaetano](https://github.com/webcaetano) Phaser.io Boilerplate in Gulp ES6 (babel)

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


#### Build and Deploy to gh-pages

```
gulp deploy
```

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
