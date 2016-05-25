var gulp = require('gulp');
var ts = require('gulp-typescript');
var order = require("gulp-order");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rimraf = require('rimraf');

var jslibs = [
    'bower_components/angular/angular.min.js'
];
var csslibs = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css'
];

gulp.task('default', ['build:scripts', 'build:styles'], function () {

});

gulp.task('build:scripts', ['typescript:bundle', 'jslibs:copy'], function () {
    return gulp.src('build/*.min.js')
        .pipe(order([
            "angular.min.js",
            "deploymentdemo.min.js"
        ]))
        .pipe(concat('deploymentdemo.min.js'))
        .pipe(gulp.dest('dist/'));
});
gulp.task('typescript:bundle', function () {
    return gulp.src('Scripts/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            target: 'ES5'
        }))
        .pipe(order([
            "!App.js",
            "App.js"
        ]))
        .pipe(concat('deploymentdemo.js'))
        .pipe(gulp.dest('build/'))
        .pipe(uglify())
        .pipe(rename("deploymentdemo.min.js"))
        .pipe(gulp.dest('build/'));
});
gulp.task('jslibs:copy', function () {
    return gulp.src(jslibs)
        .pipe(gulp.dest('build/'));
});

gulp.task('build:styles', ['css:bundle', 'csslibs:copy'], function () {
    return gulp.src('build/*.min.css')
        .pipe(order(["bootstrap.min.css", "deploymentdemo.min.css"]))
        .pipe(concat('deploymentdemo.min.css'))
        .pipe(gulp.dest('dist/'));
});
gulp.task('css:bundle', function () {
    return gulp.src('Styles/**/*.less')
        .pipe(less())
        .pipe(concat('deploymentdemo.css'))
        .pipe(gulp.dest('build/'))
        .pipe(minifyCSS())
        .pipe(rename("deploymentdemo.min.css"))
        .pipe(gulp.dest('build/'));
});
gulp.task('csslibs:copy', function () {
    return gulp.src(csslibs)
        .pipe(gulp.dest('build/'));
});

gulp.task('clean', ['clean:build', 'clean:dist']);
gulp.task('clean:build', function (cb) {
    rimraf('./build', cb);
});
gulp.task('clean:dist', function (cb) {
    rimraf('./dist', cb);
});