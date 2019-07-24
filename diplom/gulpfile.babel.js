"use strict";

import del from 'del';
import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';
import eslint from 'gulp-eslint';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webpack from 'webpack';
import webpackconfig from './webpack.config.js';
import webpackstream from 'webpack-stream';


const paths = {
  scripts: {
    srcMain: 'src/js/main.js',
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  styles: {
    // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
    src: "src/sass/*.sass",
    // Compiled files will end up in whichever folder it's found in (partials are not compiled)
    dest: "dist/css/"
  },
  templates: {
    src: "src/*.html",
    dest: "dist/"
  },
  images: {
    src: "src/img/**/*",
    dest: "dist/img/"
  },
  fonts: {
    src: "src/fonts/**/*",
    dest: "dist/fonts/"
  }
};

const clean = () => del(['dist']);

// browser-sync
const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './dist'
    }
  });
  done();
}

// scripts
function scriptsLint() {
  return gulp
    .src([paths.scripts.src, "./gulpfile.babel.js"])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function scripts() {
  return gulp.src(paths.scripts.srcMain, { sourcemaps: true })
    .pipe(plumber())
    .pipe(webpackstream(webpackconfig, webpack))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(server.stream());
}

// styles
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }))
    .on("error", sass.logError)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(server.stream());
}

function moveCSS() {
  return gulp
    .src("src/css/*.css")
    .pipe(gulp.dest(paths.styles.dest));
}

// images
function images() {
  return gulp
    .src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            {
              removeViewBox: false,
              collapseGroups: true
            }
          ]
        })
      ])
    )
    .pipe(gulp.dest(paths.images.dest));
}

// templates
function templates() {
  return gulp.src(paths.templates.src)
    .pipe(gulp.dest(paths.templates.dest));
}

// fonts
function fonts() {
  return gulp
    .src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
}


const watch = () => {
  gulp.watch(paths.scripts.src, gulp.series(scriptsLint, scripts));
  gulp.watch(paths.styles.src, gulp.series(styles));
  gulp.watch(paths.images.src, gulp.series(images, reload));
  gulp.watch(paths.templates.src, gulp.series(templates, reload));
  
};

const dev = gulp.series(clean, scripts, styles, moveCSS, 
      fonts, images, templates, serve, watch);
export default dev;
