
module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      express: {
        files:  [ '**/*.*' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
      }
    },
    express: {
  options: {
    // Override defaults here
  },
  dev: {
    options: {
      script: 'devServer.js'
    }
  }
    }
  });
grunt.loadNpmTasks('grunt-express-server');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('server', [ 'express:dev', 'watch' ])
}
