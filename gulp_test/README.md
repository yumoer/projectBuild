* 声明使编程：做什么，内部包装命令式编程的代码
* 命令式变成：流程+做什么
* cli 命令行接口
* --save-dev
* 只下载直接依赖（灰色），间接依赖不用去管
* commonjs向外暴露的是exports
     默认值是一个空对象{}

    module.exports = value  //第一种暴露方式
    exports.xxx = value  //第二种暴露方式
    exports.yyy = value

* 默认找default，grunt命令

## 1. package.json的结构
    {
        1. 标识: 名称/版本号
        "name": "grunt_test",
        "version": "1.0.0"
        2. 对项目进行打包/运行的npm run 命令
        "scripts": {
          "xxx": "node index.js"    npm run xxx
        }
        3. 依赖: 运行时依赖/开发时依赖
        "dependencies": {

        },
        "devDependencies": {

        }
    }
## 2. 命令式编程与声明式编程
    命令式编程: 对流程和具体工作都要进行编码  --问答题
    声明式编程: 我们只需要对具体工作进行编码, 流程已经封装好了  --填空题
    声明式编程内部是命令式编程
    数组有好一些声明式编程的方法: filter()/find()/map()/reduce()
    后面的react/vue库都使用的声明式编程

## 3. git项目管理 - git版本控制的6个基本操作及命令
* 1.创建本地仓库
    创建.gitignore配置文件
    工作区/缓存区/版本区
    git init
    git add *
    git commit -m "上传说明"
* 2.创建远程仓库
    New Repository
    指定名称
    创建
* 3.将本地仓库推送到远程仓库
    git remote add origin url
	git push origin master
* 4.push本地更新，将修改完的推送到远程仓库
    git add *
    git commit -m "xxx"
    git push origin master
* 5.pull远程更新，拉取远程更新到本地仓库
	git pull origin master
* 6.克隆远程仓库上的项目到本地
	git clone url

## 4. 说说你对项目构建的理解
	1). 构建项目到底做些什么
		编译项目中的js, sass, less
		合并js/css等资源文件
		压缩js/css/html等资源文件
		JS语法的检查
	2). 构建工具
		作用: 简化项目构建, 实现自动化构建
		常用: grunt/gulp/webpack

## 5. 说说你对grunt/gulp的理解
	1). 都是前端项目的自动化构建工具
	2). 基于nodeJs的命令行
	3). 一个‘任务运行器’， 配合其丰富强大的插件实现项目构建
	4). 通过配置文件来定义构建任务, 通过相应的命令启动构建
	5). gulp相对更高效(异步多任务), 更易于使用, 插件高质量