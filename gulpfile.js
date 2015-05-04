var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('public/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/styles'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('public/styles/**/*.scss', ['sass']);
});