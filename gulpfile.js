// Node/Gulp Utilities
const gulp = require('gulp');
const log = require('fancy-log');
const c = require('chalk');
const plumber = require('gulp-plumber');
const spawn = require('child_process').spawn;
const gulpif = require('gulp-if');

// Development Tools
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const notify = browserSync.notify;
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const uncss = require('uncss').postcssPlugin;
const prefix = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const uglify = require('gulp-uglify');
const changed = require('gulp-changed');
const concat = require('gulp-concat');
const modernizr = require('gulp-modernizr');


//——————————————————————————————————————————————————————————————————————————————
// Debug info
//——————————————————————————————————————————————————————————————————————————————
if (process.env.NODE_ENV === 'production') {
  log(c.bgYellow.black('Production'), c.yellow('environment detected'));
} else {
  log(c.bgYellow.black('Local'), c.yellow('environment detected'));
}


//——————————————————————————————————————————————————————————————————————————————
// BrowserSync
//——————————————————————————————————————————————————————————————————————————————
function bsTask() {
  browserSync({
    server: './_site',
    open: false,
    port: '4000',
  });
};
exports.bs = bsTask;


//——————————————————————————————————————————————————————————————————————————————
// Jekyll for development
//
// Note: since this site deploys to GitHub Pages, the production build of Jekyll
// is not driven by Gulp. Only GitHub infrastructure can run it.
//——————————————————————————————————————————————————————————————————————————————
function jekyllTask() {
  browserSync.notify('Jekyll building...');

  return spawn('bundle', ['exec', 'jekyll', 'build', '--config=_config.yml,_config.dev.yml'], {stdio: 'inherit'})
    .on('close', reload);
};
exports.jekyll = jekyllTask;


//——————————————————————————————————————————————————————————————————————————————
// Sass
//——————————————————————————————————————————————————————————————————————————————
function sassTask() {
  browserSync.notify('Sass compiling...');

  return gulp.src(['assets/sass/styles.scss'])
    .pipe(plumber())
    .pipe(gulpif(process.env.NODE_ENV !== 'production', sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      prefix({
        browsers: ['>0.333%', 'iOS 8'],
        cascade: false,
      }),
      uncss({
        html: ['_site/index.html', '_site/subscribe/index.html'],
        ignore: [
          /\.js/,
          /\.active/,
          /\.open/,
          /\.dropdown-backdrop/,
          /\.dropdown-btn/,
          /\#mc/,
        ],
        inject: function(window){ window.document.querySelector('html').classList.add('flexbox', 'no-flexbox', 'mediaqueries', 'no-mediaqueries', 'svg', 'no-svg'); },
      }),
      cssnano(),
    ]))
    .pipe(rename('styles.min.css'))
    .pipe(gulpif(process.env.NODE_ENV !== 'production', sourcemaps.write('./')))
    .pipe(gulp.dest('assets/css/'))
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(reload({stream: true}));
};
exports.sass = sassTask;


//——————————————————————————————————————————————————————————————————————————————
// Build Modernizr
//——————————————————————————————————————————————————————————————————————————————
function modernizrTask() {
  return gulp.src('assets/js/*.js')
    .pipe(modernizr('modernizr-output.js', {
      crawl: false,
      options: [
        'setclasses',
      ],
      tests: [
        'flexbox',
        'mediaqueries',
        'svg',
      ],
      excludeTests: [
        'dontmin', // this seems to be gulp-modernizr specific requirement
      ]
    }))
    .pipe(uglify({
      output: {
        comments: /^!/, // don't remove license or build URL
      },
    }))
    .pipe(gulp.dest('assets/js/'))
    .pipe(gulp.dest('_site/assets/js/'));
};
exports.modernizr = modernizrTask;


//——————————————————————————————————————————————————————————————————————————————
// JS Linting
//——————————————————————————————————————————————————————————————————————————————
// function dev_js_lint() => {
//   return gulp.src('_js/**/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter(stylish));
// });
// exports.jsLint = dev_js_lint;


//——————————————————————————————————————————————————————————————————————————————
// JS Bundling
//——————————————————————————————————————————————————————————————————————————————
// function dev_js_bundle() => {
//   return gulp.src([
//       './**/*.js',
//     ])
//     .pipe(concat('main.js'))
//     .pipe(gulpif(process.env.NODE_ENV === 'production', uglify()))
//     .pipe(gulp.dest('js'))
//     .pipe(gulp.dest('_site/js'))
//     .pipe(reload({stream: true}));
// });
// exports.jsBundle = dev_js_bundle;

//——————————————————————————————————————————————————————————————————————————————
// JS Lint + Bundle
//——————————————————————————————————————————————————————————————————————————————
// exports.js = gulp.series(['dev:js-lint', 'dev:js-bundle']);


//——————————————————————————————————————————————————————————————————————————————
// Watch Files For Changes
//——————————————————————————————————————————————————————————————————————————————
function watchTask() {
  // gulp.watch('_js/**/*.js', ['dev:js']);
  gulp.watch([
    'assets/**/*.scss'
  ], sassTask);
  gulp.watch([
    '_config*',
    '**/*.{md,html,json}',
    '!_site/**/*.*',
    '!node_modules/**/*.*'
  ], jekyllTask);
};
exports.watch = watchTask;


//——————————————————————————————————————————————————————————————————————————————
// DEFAULT
// Build assets and start development server
//——————————————————————————————————————————————————————————————————————————————
const defaultTask = gulp.parallel(gulp.series(jekyllTask, bsTask, sassTask), watchTask);
exports.dev = defaultTask;
exports.default = defaultTask;


//——————————————————————————————————————————————————————————————————————————————
// Prep assets for a deploy to production
//——————————————————————————————————————————————————————————————————————————————
exports.deploy = gulp.series(sassTask);
