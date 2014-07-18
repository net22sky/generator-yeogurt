/**
 * Configuration for connect task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('connect', {
        options: {
            port: 9010,
            livereload: 35729,
            hostname: '127.0.0.1'
        },
        server: {
            options: {
                open: 'http://127.0.0.1:9010/',
                base: '<%%= yeogurt.dev %>/.server'
            }
        },
        dist: {
            options: {
                open: 'http://127.0.0.1:9010/',
                base: '<%%= yeogurt.dist %>',
                livereload: false
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-connect');
};