module.exports = function(grunt) {

  grunt.config.set('browserify', {
    dev: {
      options: {
        transform: [
          ['babelify', {
            presets: ['es2015', 'react']
          }]
        ]
      },
      files: {
        '.tmp/public/js/apps/app.js': './assets/js/apps/React/app.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
};
