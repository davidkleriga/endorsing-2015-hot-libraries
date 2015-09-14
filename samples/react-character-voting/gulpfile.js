var gulp = require('gulp'),
	gulpUtility = require('gulp-util'),
	gulpIf = require('gulp-if'),
	streamify = require('gulp-streamify'),
	autoPrefixer = require('gulp-autoprefixer'),
	cssMinification = require('gulp-cssmin'),
	less = require('gulp-less'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	vinylSource = require('vinyl-source-stream').
	babelify = require('babelify'),
	browserify = require('browserify'),
	watchify = require('watchify'),
	uglify = require('gulp-uglify');

var isProductionEnvironment = process.env.NODE_ENV === 'production';

var dependencies = [ 'alt', 'react', 'react-router', 'underscore' ];

/*

*/

gulp.task('vendor', function() {
	return gulp.src([
		'bower_components/jquery/dist/jquery.js',
		'bower_components/bootstrap/dist/js/bootstrap.js',
		'bower_components/magnific-popup/dist/jquery.magnific-popup.js',
		'bower_components/toastr/toaster.js'
	]).pipe(concat('vendor.js'))
	.pipe(gulpIf(isProductionEnvironment, uglify({ mangle: false })))
	.pipe(gulp.dest('public/js'));
});

/*
	Compile vendors
*/


gulp.task('browserify-vendor', function(){
	return browserify()
		.require(dependencies)
		.bundle()
		.pipe(vinylSource('vendor.bundle.js'))
		.pipe(gulpIf(isProductionEnvironment, streamify(uglify({ mangle: false }))))
		.pipe(gulp.dest('public/js'));
});

/*
	Compile project files only
*/

gulp.task('browserify', ['browserify-vendor'], function(){
	return browserify('app/main.js')
		.external(dependencies)
		.transform(babelify)
		.bundle()
		.pipe(vinylSource)
		.pipe(gulpIf(isProductionEnvironment, streamify(uglify({ mangle: false }))))
		.pipe(gulp.dest('public/js'))
});


gulp.task('browserify-watch', ['browserify-vendor'], function(){
	var bundler = watchify(browserify('app/main.js', watchify.args));
	bundler.external(dependencies);
	bundler.transform(babelify);
	bundler.on('update', rebundle);
	return rebundle();

	function rebundle(){
		var start = Date.now();
		return bundler.bundle()
			.on('error', function(error){
				gulpUtility.log(gulpUtility.colors.red(error.toString()))
			}).on('end', function(){
				gulpUtility.log(gulpUtility.colors.green('Rebundle success: ' + (Date.now - start) + 'ms'))
			}).pipe(vinylSource('bundle.js'))
			.pipe(gulp.dest('public/js'));
	}
});

gulp.task('styles', function(){
	return gulp.src('app/stylesheets/main.less')
		.pipe(plumber())
		.pipe(less())
		.pipe(autoPrefixer())
		.pipe(gulpIf(isProductionEnvironment, cssMinification))
		.pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
	gulp.watch('app/stylesheets/**/*.less', ['styles']);
});

gulp.task('default', ['styles', 'vendor', 'browserify-watch', 'watch' ]);
gulp.task('build', ['styles', 'vendor', 'browserify']);