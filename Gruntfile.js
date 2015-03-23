// Gruntfile.js
module.exports = function(grunt){
	grunt.initConfig({
		watch: {
			sass: {
				files: "assets/*.scss",
				tasks: ['sass']
			}
		},
		sass: {
			dev: {
				files: {
					"assets/styles.css" : "assets/styles.scss"
				}
			}
		},
	})
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass','watch']);
};