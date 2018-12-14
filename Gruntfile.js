const sass = require('node-sass');

module.exports = function(grunt) {

    grunt.initConfig({
      // jshint: {
      //   files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      //   options: {
      //     globals: {
      //       jQuery: true
      //     }
      //   }
      // },
      // watch: {
      //   files: ['<%= jshint.files %>'],
      //   tasks: ['jshint']
      // },
      fixturesPath: "fixtures",
      htmlbuild: {
        dist: {
          src: 'index.html',
          dest: 'dist/',
          options: {
            beautify: true,
            scripts: {
                bundle: [
                    'scripts/*.js',
                    '!**/main.js',
                ],
                main: 'scripts/main.js'
            },
            styles: {
                bundle: [ 
                    'css/libs.css',
                    'css/dev.css'
                ],
                test: 'css/inline.css'
                },
            sections: {
                views: 'views/**/*.html',
                templates: 'templates/**/*.html',
            },
            data: {
					  // Data to pass to templates
                    version: "0.1.0",
                    title: "test",
            },
          }
        }
      },
      sass: {
          build: {
              files: [{
                  src: 'css/sass/styles.scss',
                  dest: 'css/styles.css'
              }]
          },
          options: {
              implementation: sass,
              sourceMap: true
          }
      }
    //   sass: {
    //       options: {
    //         implementation: sass,
    //         sourceMap: true
    //       },
    //       dist: {
    //           files: {
    //               'main.css': 'main.css'
    //           }
    //       }
    //   }
    });
  
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-sass');
  
    grunt.registerTask('default', ['htmlbuild']);
    grunt.registerTask('default', 'sass');
  
  };