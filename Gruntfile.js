module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		less: {
			'dev': {
				files: {
					'syle.compiled.css': 'less/style.less'
				}
			}
		}
	});
	// Load the plugin that provides the "less" task.
	grunt.loadNpmTasks("grunt-contrib-less");
	// Default task(s).
	grunt.registerTask('default', ['less:dev']);
};