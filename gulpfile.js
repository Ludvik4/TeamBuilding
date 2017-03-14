'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  buffer: require('vinyl-buffer'),
  merge: require('merge-stream'),
  mainBowerFiles: require('main-bower-files'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    //'js:foundation',
     'copyBowerFiles',
    'js:process',
    'copy:image',
      //'copy:css',
    'copy:fonts',
    'css:foundation'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
