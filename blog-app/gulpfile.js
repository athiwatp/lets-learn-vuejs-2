var gulp            = require('gulp');
var sass            = require('gulp-sass');
var browserSync     = require('browser-sync').create();
var proxy           = require('http-proxy-middleware');
var reload          = browserSync.reload;

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("./src/sass/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./src/css/"))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
      notify: false,
        server: {
          baseDir: "./"
        }
    });

    gulp.watch("src/sass/styles.scss", ['sass', reload]);
    gulp.watch("./*.html").on('change', reload);
    gulp.watch("src/js/*.js").on('change', reload);
});



gulp.task('default', ['serve']);
