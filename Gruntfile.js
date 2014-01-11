module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.readFile('package.json'),
		jadeUsemin: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
			},
			files: {
				src: ['views/layout.jade', 'views/index.jade']
			}
		}
	});

	grunt.loadNpmTasks('grunt-jade-usemin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['jadeUsemin']);
};