const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const terser = require("gulp-terser");

function compileCss() {
  return src("src/sass/*.scss")
    .pipe(sass())
    .pipe(prefix())
    .pipe(minify())
    .pipe(dest("dist/css"));
}

function jsmin() {
  return src("src/js/*.js").pipe(terser()).pipe(dest("dist/js"));
}

function watchTask() {
  watch("src/sass/*.scss", compileCss);
  watch("src/js/*.js", jsmin);
}

exports.default = series(compileCss, jsmin);
