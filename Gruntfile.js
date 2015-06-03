module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'static/style.css':'client/style/style.less'
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
        dest: 'static/client.js'
      },
      production: {
        options: {
          transform: ['babelify', 'debowerify', 'uglifyify']
        },
        src: '<%= browserify.dev.src %>',
        dest: 'static/client.js'
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
        files: 'client/js/*.js',
        tasks: ['browserify:dev']
      }
    }
  });
  grunt.registerTask('default', ['less','browserify:dev', 'watch']);
  grunt.registerTask('dist', ['less', 'browserify:production']);
};