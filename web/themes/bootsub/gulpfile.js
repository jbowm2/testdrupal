var browserSync = require('browser-sync');
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');

gulp.task('less', function () {
  gulp.src('./less/style.less')
    .pipe(plumber())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
    // browserSync.init({
    //     //injectChanges: true,
    //     proxy: "http://dev.northarrow.com/"
    // });
    gulp.watch("./less/**/*.less", ['less']).on('change', browserSync.reload);
});

gulp.task('default', [ 'browser-sync']);