var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

console.log('Gulpfile is loaded ready to run tasks.');

var settings = {
	scriptsFolder: 'scripts/',
	distFolder: 'dist/'
};

//watch for changes
watch([settings.scriptsFolder + 'app/*.js'], function() {
	console.log('scripts have been changed rebundling...')
	gulp.start('default'); // run default tasks when changes occur
});

gulp.task('default', function() {
	return gulp.src([settings.scriptsFolder + 'lib/jquery.js', settings.scriptsFolder + 'app/*.js'])
	.pipe(concat('distribution-app.js'))
	.pipe(uglify())
	.pipe(gulp.dest(settings.distFolder));
});

