const gulp = require("gulp");
const shell = require("gulp-shell");
const gulpSequence = require("gulp-sequence");
const del = require("del");
const bump = require("gulp-bump");
const mocha = require("gulp-mocha");

gulp.task("tsc", shell.task(["npm run tsc"]));

gulp.task("package", [], () => {
  gulp.src(["./package.json"]).pipe(gulp.dest("./build"));
  gulp.src(["./README.md"]).pipe(gulp.dest("./build"));
  gulp.src(["./LICENSE"]).pipe(gulp.dest("./build"));
  gulp.src(["./ext_libs/**"]).pipe(gulp.dest("./build/ext_libs"));
});

gulp.task("clear", [], () => {
  del(["build"]);
});

gulp.task("bump", function() {
  gulp.src("./package.json").pipe(bump()).pipe(gulp.dest("./"));
});

gulp.task("copy", function() {
  gulp.src("./lib/**").pipe(gulp.dest("./build/lib"));
});

gulp.task("default", gulpSequence("clear", "tsc", "package", "copy"));

gulp.task("test", function() {
  gulp.src("./test/**/*.js").pipe(mocha({ reporter: "spec" }));
});
