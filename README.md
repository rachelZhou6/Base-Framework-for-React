# 基础框架
## 使用步骤
##1.cd到工作目录
``` shell
cd ~/work/ximalaya
```
##2.clone项目
``` shell
git clone -b <分支名> http://gitlab.ximalaya.com/ops/base-framework.git
```
##3.更改文件名
``` shell
mv base-framework <your project name>
```
##4.删除.git
``` shell
cd <your project name>
rm -rf .git
```
##5.合并到远程创建的gitlab地址
```shell
git init
git remote add origin http://(远程分支地址)
git add .
git commit -m'(message)'
git push -u origin master
```
##6.修改package.json的相关信息(name/version/repository 及其他可配置项)
