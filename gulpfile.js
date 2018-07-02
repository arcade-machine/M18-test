var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var browserSync = require("browser-sync").create();
var useref = require("gulp-useref");
var minify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var minicss = require("gulp-csso");
var rename = require("gulp-rename");

gulp.task("less", function () {
    return gulp.src("source/less/styles.less")
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("source/css"))
        .pipe(minicss())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest("source/css"))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task("image", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(imagemin([
      imagemin.optipng({optomisationLevel: 4}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("source/img/min-img"));
})

gulp.task("webp", function () {
  return gulp.src("source/img/min-img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img/webp"))
});

gulp.task("sprite", function() {
  return gulp.src("source/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("watch", ["browserSync", "less"], function () {
    gulp.watch("source/less/**/*.less", ["less"]);
    gulp.watch("source/*.html", browserSync.reload);
    gulp.watch("source/js/*.js", browserSync.reload);
});

gulp.task("browserSync", function () {
    browserSync.init({
        server: {
            baseDir: "source"
        },
    })
});