/**
 * Created by enrique.cantillo on 15.08.17.
 */
// wrapper function
module.exports = function(grunt) {

    // project & task config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * grunt-sass (compile sass to css using node-sass)
         * Documentation : https://www.npmjs.com/package/grunt-sass
         */
        sass: {
            options: {
                /*
                 * debug/view css in dev tools set to : true
                 * no debugging set to : false
                 */
                sourceMap: true
            },
            dist: {
                /*
                 *  left: is compiled for production
                 * right: is for development
                 */
                files: {
                    'css/styles.css' : 'dev/sass/styles.scss'
                }
            }
        },

        /**
         * grunt-contrib-watch (monitor files and execute tasks)
         * Documentation : https://www.npmjs.com/package/grunt-contrib-watch
         */
        watch: {
            options: {
                livereload: true
            },
            sass:  {
                files: [
                    'dev/sass/*.scss'
                ],
                tasks: [
                    'sass'
                ]
            }
        }
    });

    // simpler, loads all of the above tasks
    require('load-grunt-tasks')(grunt);

    // custom tasks
    grunt.registerTask('default', ['sass', 'watch']);
};

