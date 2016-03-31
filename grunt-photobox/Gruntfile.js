module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      all: 'build'
    },
    photobox: {
      build: {
        options: {
          urls: ['http://www.linkmedal.com/abra-sns/index.php?app=portal&mod=Index'],
          indexPath: 'build/photobox',
          screenSizes: ['320', '360', '375', '414', '768', '1024', '1600', '2560']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-photobox');
  grunt.registerTask('build', ['clean:all', 'photobox:build']);
};
