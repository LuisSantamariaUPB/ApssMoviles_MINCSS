module.exports = function(grunt){

    // Project configuration.
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        cssmin : {
			target : {
				src : ["css/style.css"],
				dest : "css/style.min.css"
			}
		}
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['cssmin']);

};