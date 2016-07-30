'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function(options) {
	gulp.task('fullReload',gulp.series('inject',function(done){
		browserSync.reload();
		done();
	}));

	gulp.task('watch', gulp.series('clean','inject',gulp.parallel('scripts:watch'), function watch(done) {
		gulp.watch([
			options.src + '/index.html',
			'./bower.json',
			options.src + '/scripts/**/*.{data.js}',
		], gulp.series('fullReload'));

		done();
	}));
};
