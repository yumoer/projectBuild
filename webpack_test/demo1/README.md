# 第一天
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
# 第二天
* 模块化：用来形容项目，描述项目的编码方式，就是模块化项目
* 打包：对文件进行处理
* 入口文件语法 import xxx form url
	* 如果其他文件是默认暴露  import xxx
	* 如果其他文件不是默认暴露  import {xxx}
