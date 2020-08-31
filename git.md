#### Git

版本管理工具(VCS)

1.分布式版本控制

2.多个开发人员协调工作

3.有效监听谁做的修改

4.本地及远程操作



与SVN的区别

1.Git是分布式的，svn不是

2.Git与svn版本机制不一样

3.Git不需要联网

4.Git的内容完整性要优于svn



git工作流程

1.从远程仓库中克隆代码到本地仓库

2.从本地仓库中checkout代码然后进行代码修改

3.在提交前先将代码添加到暂存区

4.提交到本地仓库。本地仓库中保存修改的各个历史版本

5.修改完成后，需要和团队成员共享代码时，将代码push到远程仓库



Basic Commands

1.git init //初始化本地git仓库

2.git add <file> //添加文件

3.git status //查看状态

4.git commit //提交

5.git push //推送到仓库

6.git pull  //从远程仓库拉取数据

7.git clone  //从远程仓库拷贝数据

查看：git config -l

配置：git config xxx(必须填user.name和user,email)

三级文件配置：  优先级高到低

.git/config

当前用户目录/.gitconfig

git安装目录/etc/gitconfig

本地提交：

git add filename 提交到索引(-A代表全部)

git commit -m  '版本描述'       提交到文件库

git commit -am  ‘版本描述’      一步完成提交



git中的三类文件

被追踪的(tracked):已经加入文档库

不被追踪的(untracked):没有加入文档库

忽略的(ignored):忽略那些不需要管理的文件夹或文档



echo >index.html

echo >app.js

git init

git config --global user.name 'ChenXv'

git config --global user.email '1040255945'

git add index.html 添加到队列

git status

git rm --cached index.html  删除index.html

git add *.html 上传所有html文件

git add . 添加所有文件



git commit -m 'changed index.html'   ×

​                    -a -m 'dec'

###### git如何忽略分支文件

echo >.gitignore

之后在.gitignore文件中写入需要忽略的文件名字

eg: log.txt  /dir1



git branch login    创建login分支

git checkout login  切换login分支

git checkout master 切换主线

git merge login 合并主线和分支



git clone  url





3.2获取git仓库

两种方式：

1.在本地初始化一个Git仓库

2.从远程仓库克隆



git init            

git clone url  

版本库：.git隐藏文件夹(版本库)，存储配置信息、日志信息和文件版本信息等

工作区：包含.git文件夹的目录就是工作目录(工作区)，主要用来存放代码

暂存区：.git文件夹中有很多文件，其中有一个index文件就是暂存区，也可以叫做stage。暂存区是一个临时保存修改文件的地方。



Git工作目录下的文件的两种状态

untracked未跟踪(未被纳入版本控制)

tracked已跟踪(被纳入版本控制)

​	Unmodified未修改状态

​	Modified已修改状态

​	Staged已暂存状态



3.5本地仓库操作

git mv  oldname newname 移动或重命名一个文件、目录、软连接

git status     查看文件状态

git status -s 使输出信息更加简洁

git diff 查看改动

显示已写入缓存与已修改但尚未写入缓存的改动的区别

git diff 尚未缓存的改动

git diff -cached 查看已缓存的改动

git diff HEAD 查看已缓存的与未缓存的所有改动

git diff -stat 显示摘要而非整个

git  add 将未跟踪的文件加入暂存区

git reset 将暂存区的文件取消暂存

git commit (-m/-am 'dec')将暂存区的文件修改提交

git rm 删除文件

git rm --cached <file> 当我们需要删除暂存区或分支上的文件，但本地又需要使用，只是不希望这个文件被版本控制时可用

git rm -r test 递归删除整个目录中的所有子目录和文件

git checkout -- <file> 用版本库里的版本替换工作区里的版本

如果 文件 修改后还没有被放到暂存区，现在，撤销修改就是用版本库的版本覆盖当前的文件。

如果 文件 已经添加到暂存区后，又作了修改，现在，撤销修改就是将暂存区中的文件版本覆盖当前的文件。

 总之，就是让这个文件回到最近一次`git commit`或`git add`时的状态。  

.gitignore文件(* ! / **)  将文件添加至忽略列表    

touch .gitinore 创建文件

git log 查看日志记录 q退出

 $ git log --pretty=oneline   如果嫌 git log 输出信息太多，看得眼花缭乱，可以加上`--pretty=oneline`参数











TortoiseGit使用

创建仓库

克隆仓库

将文件添加到暂存区

提交文件

推送本地仓库至远程仓库

拉取代码

创建分支

切换分支

合并分支





在IDEA中使用git

在IDEA中创建工程并将工程添加至Git

将文件添加到暂存区

提交文件

将代码推送到远程仓库

从远程仓库克隆工程到本地

从远程拉取代码

版本对比

创建分支

切换分支

合并分支





更新数据

 **git fetch**：从远程获取最新版本到本地，不会自动 merge 

 $ git checkout issue12 

$ git fetch origin issue12 

$ git log -p issue12..origin/issue12 

$ git merge origin/issue12 

解析:
(1).切换到issue12分支
(2).从远程的origin的issue12主分支下载最新的版本到origin/issue12分支上
(3).比较本地的issue12分支和origin/issue12分支的差别 ( git log 常用 -p 选项展开显示每次提交的内容差异 )

(4).将origin/issue12分支合并到issue12

 **git pull**：相当于是从远程获取最新版本并merge到本地 

 $ git checkout issue13 

$ git pull origin issue13 

 上述 git pull 命令, 相当于 git fetch 和 git merge 



分支

查看分支

git branch 列出所有本地分支

git branch -r 列出所有远程分支

git branch -a 列出所有本地分支和远程分支

创建分支

git branch branchname

 git checkout -b 分支名 命令来创建新分支并立即切换到该分支下，从而在该分支中操作 

切换分支

git checkout branchname

推送至远程仓库分支

git push [remote-name] [branch-name]

合并分支

git merge <branchname>  合并某分支到当前分支 

如果在两个不同的分支中，对同一个文件的同一个部分进行了不同的修改，git就没办法合并它们，同时会提示文件冲突。此时需要我们打开冲突的文件并修复冲突内容，最后执行git add命令来标识冲突已解决

 git merge --no-ff -m "merge with no-ff" dev2 

因为我们禁用 Fast forward 模式, 所以本次合并会创建一个新的 commit(提交), 我们用 -m 给这次 commit 加上描述,然后我们用 git log 查看下分支历史

通常 Git 在合并分支的时候会用 Fast forward 模式, 这样删除分支后, 也会丢掉分支信息.

我们在合并分支时可以使用 --no-ff 参数,强制禁用 Fastforward 模式, 这样 Git 在合并时会生成一个新的 commit(提交), 然后我们就可以在历史分支上看出分支信息.

删除分支

git branch -d/-D  branchname  删除本地分支

git push origin -d branchname 删除远程分支



远程仓库

git remote 查看远程仓库( 远程仓库默认名字是 origin )

git remote -v/  git remote show origin  查看详细信息

git remote add <shortname> <url>添加一个新的远程git仓库

git clone <url> 从远程仓库克隆

当执行git clone命令时，默认配置下远程Git仓库中的每一个文件的每一个版本都将被拉取下来

git remote rm 移除远程仓库

此命令只是从本地移除远程仓库的记录，并不会真正影响到远程仓库

git fetch 从远程仓库获取最新版本到本地仓库，不会自动merge(合并处理)

git merge 将抓取的文件合并到工作区

 git branch --set-upstream dev origin/dev  

如果你没有指定关联 dev 分支与远程 origin/dev 分支的链接, git pull 会失败,这时要先设置下`dev`和`origin/dev`的链接 

git pull 从远程仓库获取最新版本并merge到本地仓库

注意：如果当前本地仓库不是从远程仓库克隆，而是本地创建的仓库，并且仓库中存在文件，此时再从远程仓库拉取文件的时候会报错(fatal:refusing to merge unrelated histories),解决此问题可以在git pull命令后加入参数--allow-unrelated-histories

git push <remote-name> <branch-name>   推送代码到远程仓库

git log -p issue12..origin/issue12   

比较本地的issue12分支和origin/issue12分支的差别 ( git log 常用 -p 选项展开显示每次提交的内容差异 ) 



## 版本回退 ( git reset )

 git reset --hard HEAD^   回退到上一个版本 

 在 Git 中，用 HEAD 表示当前版本，上一个版本就是 HEAD^，上上一个版本就是 HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100  

 git reflog  用来记录你的每一次命令 

 显示整个本地仓储的 commit, 包括所有 branch 的 commit, 甚至包括已经撤销的 commit, 只要 HEAD 发生了变化, 就会在 reflog 里面看得到.  

 git reset --hard 后也可以指定 commit id 切到指定版本 





标签   某个分支某个特定时间点的状态

列出已有的标签

git tag

git show <tag-name> 查看tag信息

创建新标签

git tag <tag-name>

 标签是默认打在最新提交的 commit id 上的

 git log --pretty=oneline --abbrev-commit

 git tag v0.8 e871a66 

将标签推送至远程仓库

git push origin <tag-name>    推送某个标签到远程 

 git push origin --tags   一次性推送全部尚未推送到远程的本地标签 

检出标签

git checkout -b [branch] [tag]

删除标签

git tag -d <tag-name>删除本地tag

git push origin :refs/tags/<tag-name>  先从本地删除, 然后从远程删除 



## Git 配置

 Git 提供了一个叫做 git config 的工具，专门用来配置或读取相应的工作环境变量。 

这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方：

- /etc/gitconfig 文件：系统中对所有用户都普遍适用的配置。若使用 git config 时用 --system 选项，读写的就是这个文件。
- ~/.gitconfig 文件：用户目录下的配置文件只适用于该用户。若使用 git config 时用 --global 选项，读写的就是这个文件。
- 当前项目的 Git 目录中的配置文件（也就是工作目录中的 .git/config 文件）：这里的配置仅仅针对当前项目有效。每一个级别的配置都会覆盖上层的相同配置，所以 .git/config 里的配置会覆盖 /etc/gitconfig 中的同名变量。

在 Windows 系统上，Git 会找寻用户主目录下的 .gitconfig 文件。主目录即 $HOME 变量指定的目录，一般都是 C:\Documents and Settings\$USER。

此外，Git 还会尝试找寻 /etc/gitconfig 文件，只不过看当初 Git 装在什么目录，就以此作为根目录来定位。

## 配置用户信息

git config --global user.name "loen" 

git config --global user.email loen@w3cschool.cn 

 配置个人的用户名称和电子邮件地址

如果用了 --global 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。

如果要在某个特定的项目中使用其他名字或者邮件，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 .git/config 文件里。

## 查看配置信息

 git config --list     检查已有的配置信息 

有时候会看到重复的变量名，那就说明它们来自不同的配置文件（比如 /etc/gitconfig 和 ~/.gitconfig），不过最终 Git 实际采用的是最后一个。 



## 忽略特殊文件

 在 Git 工作区的根目录下创建一个名为 .gitignore 的文件, 写入过滤规则就行了 

忽略文件的原则是：

1. 忽略操作系统自动生成的文件，比如缩略图等；
2. 忽略编译生成的中间文件、可执行文件等，也就是如果一个文件是通过另一个文件自动生成的，那自动生成的文件就没必要放进版本库，比如 Java 编译产生的 .class 文件；
3. 忽略你自己的带有敏感信息的配置文件，比如存放口令的配置文件