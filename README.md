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

3.调用组件<xx1/>

注册局部组件

1.引入组件

2.注册局部组件

components:{xx1}     // “aaa-bbb”:xx1

3.调用组件



组件css样式           scoped 是当前css样式生效



多个组件  

属性传值   1.值,修改只会影响自身使用的地方  2.引用(对象、数组),修改会影响其他引用所使用的地方

父传子：

父组件<User :sbqUsers="user"/>

子组件

props:["sbqUser"]

props:{

​	users:{type:Array}

}

注册事件

this.$emit("titleChange","123");

参数1：事件名称 参数2：值



生命周期

beforeCreate / created 初始化，可获得data数据

/beforeMount 准备挂载页面，render函数首次调用/mounted 页面已被挂载

beforeUpdate 虚拟dom重新渲染并应用更新/updated数据更新完成

beforeDestory 离开页面前，定时器及三方冗余处理/destoryed销毁完毕



内置组件

slot插槽

 父组件：<User><div slot='xx'>content</div></User>

子组件：<slot  name='xx'></slot>  //content



component

<component :is="componentId"></component>

keep-alive缓存

<keep-alive>组件</keep-alive>



//flex布局

\`#ninjas{`

  `width: 100%;`

  `max-width: 1200px;`

  `margin: 40px auto;`

  `padding: 0 20px;`

  `box-sizing: border-box;`

`}`

`ul{`

  `display: flex;`

  `flex-wrap: wrap;`

  `list-style-type: none;`

  `padding: 0;`

`}`

`li{`

  `flex-grow: 1;`

  `flex-basis: 300px;`

  `text-align: center;`

  `padding: 30px;`

  `border: 1px solid #222;`

  `margin: 10px;`

`}`

