var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('styles'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('styles/**/*.scss', ['sass']);
});