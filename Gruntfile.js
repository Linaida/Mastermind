module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
         compile: {
            files: {'src/css/main.css' : 'src/less/main.less'}
         }
         },
    watch: {
        files: ['src/less/*.*','src/*.html','src/js/*.*'],
        options: {
        livereload: true
        },
        tasks: ['less']
    }
    
  });

 
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
  // Default task(s).
  grunt.registerTask('default');

};