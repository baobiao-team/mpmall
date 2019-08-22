# git学习

## 一、将本地项目与远程仓库关联

#### 如果github上是空项目，使用该方法将本地项目传上去

1. 使用`git init`命令将本地项目初始化为git项目

2. 设置个人信息，(如果已经设置就跳过这一步)

   `git config --global user.email "you@example.com"`

   `  git config --global user.name "Your Name"`

3. 生成ssh的公钥和密钥

   `ssh-keygen -t rsa -C "you@example.com"`

   将生成的公钥复制到`github`里面，如下图：

   <img src="C:\Users\w1509\AppData\Roaming\Typora\typora-user-images\1566494561329.png" width="200" />

   ![1566495212694](C:\Users\w1509\AppData\Roaming\Typora\typora-user-images\1566495212694.png)

4. 将本地仓库与远程仓库关联，注意，需要把后面`git`开头的地址改成你的远程仓库的地址

   `git remote add origin git@github.com:yourname/yourfile.git `

5. 将远程仓库已有的文件拉取到本地，第一次拉取使用以下命令:

   `git pull origin master`

6. 在项目根目录下使用`git add .`命令将本地文件添加到暂存区。

7. 使用`git commit - m '提交说明'` 命令将本地暂存区文件添加到本地仓库

8. 第一次提交使用`git push -u origin master`命令，将本地仓库内容提交到远程仓库，并将本地分支与远程的`master`分支关联起来



## 二、将远程仓库内容clone到本地

#### 如果github上不是空项目，使用该方法下载github项目

1. 在本地使用`git clone '远程仓库地址'`将远程项目clone到本地

   <img src="C:\Users\w1509\AppData\Roaming\Typora\typora-user-images\1566496348277.png" width="350" />

2. 将项目克隆到本地后，可以在本地修改项目文件，然后使用`git pull `，`git add filename`，`git commit -m 'message'`，`git push`将修改提交上去。

## git常用命令

1. 

## git参考资料

`git`网上有很多资料，这里推荐[廖雪峰的git教程](https://www.liaoxuefeng.com/wiki/896043488029600)





