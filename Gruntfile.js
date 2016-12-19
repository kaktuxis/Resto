module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		less: {
			'dev': {
				files: {
					'style.compiled.css': 'less/style.less'
				}
			}
		},
		cssnano: {
			options: {
				sourcemap: true
			},
			dist: {
				files: {
					'style.min.css': 'style.compiled.css'
				}
			}
		}
	});
	  	// Load the plugin that provides the "less" task.
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-cssnano');
	// Default task(s).
	grunt.registerTask('default', ['less:dev', 'cssnano']);	
};