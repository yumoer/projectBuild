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

* git项目管理
* 1.创建本地仓库
    工作区/缓存区/版本区
    git init
    git add *
    git commit -m ""
* 2.创建远程仓库
* 3.将本地仓库推送到远程仓库
    git remote add origin
* 4.如果本地有修改，将修改完的推送到远程仓库
* 5.如果远程有更新，拉取远程更新到本地仓库
* 6.克隆远程仓库到本地