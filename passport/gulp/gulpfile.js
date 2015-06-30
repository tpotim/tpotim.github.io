var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

// js
gulp.task('js', function() {
	return src([
			'dist/jquery/jquery-1.11.2.min.js',
			'dist/materialize/mt.min.js',
			'js/index.js'
		])
		.pipe(concat('index.min.js'))
		.pipe(uglify())
		.pipe(dest('js'));
});

// css
gulp.task('css', function() {
	return src([
			'dist/materialize/mt.css',
			'dist/icomoon/style.css',
			'css/style.css'
		])
		.pipe(concat('style.min.css'))
		//.pipe(minifyCss())
		.pipe(dest('css'));
});



// default ..
gulp.task('default', ['js', 'css'], function() {
	//console.log('done');
});




// 切换src的工作目录
function src(globs, options) {
	options = options || {};
	options.cwd = path.join(__dirname, '..');
	return gulp.src(globs, options);
};

// 切换dest的工作目录
function dest(folder, options) {
	options = options || {};
	options.cwd = path.join(__dirname, '..');
	return gulp.dest(folder, options);
};