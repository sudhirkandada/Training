/**
 * Created by skandada on 3/7/2016.
 */

module.exports = function (grunt) {

    // intialize
    grunt.initConfig({
        wiredep: {

            task: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'index.html'
                ],

                options: {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep#configuration
                }
            }
        },
        copy: {
            dev : {
                files: [
                    {src:'index.html', dest:'dev/'},
                    {src: ['templates/**', 'js/**'], dest:'dev/'}
                ]
            },
            dist: {
                files: [
                    {src:'index.html', dest:'dist/'},
                    {src: ['templates/**', 'js/**'], dest:'dist/'}
                ]
            }
        },
        clean: {
            dev: ['./dev'],
            dist: ['./dist']
        }
    });

    //load plugin tasks
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //define tasks
    grunt.registerTask('default', [
        'echo',
        'wiredep'
    ]);
    grunt.registerTask('echo', function(){
        grunt.log.write('hello world..');
    });
};

