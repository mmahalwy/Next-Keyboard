var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('public/styles/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
        .pipe(gulp.dest('public/styles'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('public/styles/**/*.scss', ['sass']);
});
