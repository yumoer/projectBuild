module.exports = function(grunt) {  // grunt对象

  // 1. 初始化配置(插件)
  grunt.initConfig({
    // 合并JS
    concat: {
      options: {
        separator: ';', // 文件之间的代码用分号分隔
      },
      xxx: { // 任意名称
        src: ['src/js/*.js'],  // 被合并的所有js
        dest: 'dist/js/built.js', // 合并生成的js
      },
    },
    // 压缩js
    uglify: {
      my_target: {
        files: {
          'dist/js/built.min.js': ['dist/js/built.js']
        }
      }
    },
    // 合并压缩CSS
    cssmin: {
      target: {
        files: {
          'dist/css/built.min.css': ['src/css/*.css']
        }
      }
    },

    // jshint语法检查
    jshint: {
      options: {
        // 是否允许省略分号(semicolon)
        "asi": true,
      },
      all: ['Gruntfile.js', 'src/js/*.js']
    },

    // 监视源文件变化, 自动重新打包
    watch: {
      scripts: {
        files: ['src/js/*.js', 'src/css/*.css'],
        tasks: ['jshint', 'concat', 'uglify', 'cssmin'],
      },
    }
  });

  // 加载插件包
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')

  // 注册任务(待执行)
  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin'])
  grunt.registerTask('watchTask', ['default', 'watch'])

};

/*
commonjs向外暴露的是什么?
  exports
  默认值是一个空对象{}


  module.exports = value
  exports.xxx = value
  exports.yyy = value
 */