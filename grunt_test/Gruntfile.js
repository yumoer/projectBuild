module.exports = function (grunt) {
    // 1. 初始化配置(插件)
    grunt.initConfig({
        // 合并JS
        concat: {
            options: {
                separator: ';',  //多个文件之间的代码用“;”隔开
            },
            dist: {  //任意名称
                src: ['src/js/test1.js', 'src/js/test2.js'], //被合并的所有js - src/js/*.js
                dest: 'dist/js/built.js',  //合并之后生成的js
            },
        },
        // 压缩合并后的JS
        uglify: {
            my_target: {
                files: {
                    'dist/js/built.min.js': ['dist/js/built.js']
                }
            }
        },
        //合并压缩css
        cssmin: {
            target: {
                files: {
                    'dist/css/built.min.css': ['src/css/*.css']
                }
            }
        },
        //jshint 语法检查
        jshint: {
            option: {
                // 是否允许省略分号(semicolon)
                "asi": true,
            },
            all: ['Gruntfile.js', 'src/js/*.js']
        },

        //监视源文件变化, 自动重新打包
        watch: {
            scripts: {
                files: ['src/js/*.js', 'src/css/*.css'],
                tasks: ['jshint', 'concat', 'uglify', 'cssmin'],
            },
        }


    })
    // 2. 加载插件任务(所有需要的)
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-contrib-watch')


    // 3. 注册构建任务(待执行)
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin','watch'])
    // grunt.registerTask('watchTask', ['default', 'watch'])
}
