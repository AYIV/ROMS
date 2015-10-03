/// <binding AfterBuild='copy:main' />
/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: 'wwwroot/lib',
                    layout: 'byComponent',
                    cleanTargetDir: false
                }
            }
        },
        
        copy: {
            main: {
                src: 'app-custom-scripts/*',
                dest: 'wwwroot/lib/'
            }
        }
    });

    grunt.registerTask('default', ['bower:intall']);
};