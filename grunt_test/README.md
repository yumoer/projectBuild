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
    
## 3. git版本控制的6个基本操作及命令
    1). 创建本地仓库
        创建.gitignore配置文件
        git init
        git add *
        git commit -m "xxx"
        
    2). 创建github远程仓库
        New Repository
        指定名称
        创建
    3). 将本地仓库推送到远程仓库
        git remote add origin https://github.com/zxfjd3g/171208_projectbuild.git 关联远程仓库
        git push origin master
    
    4). push本地的更新 
        git add *
        git commit -m "xxx"
        git push origin master
    5). pull远程的更新
        git pull origin master
            
    6). 克隆github上的项目:
        git clone https://github.com/zxfjd3g/171208_projectbuild.git
