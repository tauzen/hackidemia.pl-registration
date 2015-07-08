module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  var PORT = require('./server/configuration').LISTEN_PORT;

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'static/css/style.css': 'client/style/style.less'
        }
      }
    },
    browserify: {
      dev: {
        options: {
          transform: ['babelify', 'debowerify'],
          browserifyOptions: {
            debug: true
          }
        },
        src: 'client/js/main.js',
        dest: 'static/js/client.js'
      },
      production: {
        options: {
          transform: ['babelify', 'debowerify', 'uglifyify']
        },
        src: '<%= browserify.dev.src %>',
        dest: 'static/js/client.js'
      }
    },
    watch: {
      styles: {
        files: ['client/style/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      browserify: {
        files: 'client/js/**/*.js',
        tasks: ['browserify:dev']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ['static/css/style.css', 'static/js/client.js']
        },
        options: {
          watchTask: true,
          proxy: 'localhost:' + PORT
        }
      }
    }
  });
  grunt.registerTask('default', ['less', 'browserify:dev', 'browserSync', 'watch']);
  grunt.registerTask('dist', ['less', 'browserify:production']);
};
