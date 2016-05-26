'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function(options) {
	gulp.task('watch', gulp.series('inject','scripts:watch', function watch(done) {
		gulp.watch([options.src + '/*.html','./bower.json',options.src+'/app/**/*.{data.js}'], gulp.series('inject', function watch(){
			browserSync.reload();
		}));

		gulp.watch([options.src + '/{app,components}/**/*.html',options.src+'/app/**/*.{json}'], function watch(event) {
			browserSync.reload(event.path);
		});
		done();
	}));
};
