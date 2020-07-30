##### npm/cnpm

###### cnpm安装

npm install cnpm -g --registry=https://registry.npm.taobao.org

cnpm -v 来测试是否成功安装



##### vue

###### vue-cli

脚手架安装：npm install -g @vue/cli

ls/dir 显示当前目录文件

cd ~ 切换到默认路径

cd / 切换到根路径

###### 项目创建

项目创建 vue create proName

项目启动 npm run serve /npm start /npm run dev

项目打包 npm run build 

babel.config.js  用于语法转换配置

.gitignore  git 上传忽略的文件

###### 组件

注册全局组件(main.js)

1.引入组件 import xx1 from xx

2.注册全局组件

Vue.component("cpmponentName",xx1)

注册局部组件

1.引入组件

2.注册局部组件

components:{xx1}



