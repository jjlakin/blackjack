module.exports = function(grunt) {


	grunt.initConfig({

		pgk: grunt.file.readJSON('package.json'),

		jshint:{
			all: ['Gruntfile.js', 'spec/**/*.js', 'src/**/*.js']
		},

		jasmine_node:{
			all: ['spec/']
		},

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jasmine-node');
	grunt.registerTask('default',['jshint','jasmine_node']);



};