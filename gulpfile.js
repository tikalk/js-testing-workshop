var gulp = require('gulp');
var karma = require('karma').server;
var pathToKarmaConf = __dirname;

gulp.task('test', function (done) {
  karma.start({
    configFile: pathToKarmaConf + '/karma.conf.js',
  }, done);
});