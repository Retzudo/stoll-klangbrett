gulp = require('gulp');
sass = require('gulp-sass');
uglify = require('gulp-uglify');

gulp.task('html', function () {
  return gulp.src('./quellen/html/**/*.html')
      .pipe(gulp.dest('./verteilung'));
});

gulp.task('css', function () {
  return gulp.src('./quellen/sass/**/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./verteilung/stilblaetter'));
});

gulp.task('js', function () {
  return gulp.src('./quellen/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./verteilung/javaskripte'));
});

gulp.task('default', ['html', 'css', 'js']);
