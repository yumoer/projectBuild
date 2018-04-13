// 引入gulp
const gulp = require('gulp')
var concat = require('gulp-concat');
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var less = require('gulp-less')
var cleanCss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin')
const connect = require('gulp-connect')
const open = require('open')



//压缩html任务
gulp.task('htmlTask', function() {
    return gulp.src('index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
        // 每个构建任务后添加
        .pipe(connect.reload())
})

//less处理任务
gulp.task('lessTask', function () {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        // 每个构建任务后添加
        .pipe(connect.reload())

})

//css处理任务, 指定依赖的任务
gulp.task('cssTask',['lessTask'], function () {
    return gulp.src('src/css/*.css')
        .pipe(concat('built.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'))
        // 每个构建任务后添加
        .pipe(connect.reload())

})

// 定义打包构建特定资源的任务
gulp.task('jsTask', function () {
    //读取待处理的源文件
    return gulp.src('src/js/*.js') //操作的源文件
        .pipe(concat('built.js',{newLine:';'})) //合并到临时文件
        .pipe(gulp.dest('dist/js')) //生成到目标文件夹
        .pipe(rename({suffix: '.min'})) //重命名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dist/js'))
        // 每个构建任务后添加
        .pipe(connect.reload())
})

// 定义默认任务(关联了n个其它任务)
gulp.task('default', ['jsTask', 'cssTask','htmlTask'])
// 定义带监视的任务
gulp.task('watch', ['default'], function () {
    //监视指定的文件, 并指定对应的处理任务
    gulp.watch('src/js/*.js', ['jsTask'])
    gulp.watch(['src/css/*.css','src/less/*.less'], ['cssTask','lessTask'])
})

gulp.task('livereload', function() {
    //配置加载的选项
    connect.server({
        root : 'dist/',//监视的源目标文件路径
        livereload : true,//是否实时刷新
        port : 5000//开启端口号
    });
    // 自动开启链接
    open('http://localhost:5000')
    // 监视目标文件
    gulp.watch('src/js/*.js', ['jsTask']);
    gulp.watch(['src/css/*.css', 'src/less/*.less'], ['cssTask'])
})



