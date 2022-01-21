module.exports = {
    title: '我的技术站', // 设置网站标题
    description: '描述：我的技术站',
    base: '/', //默认路径
    themeConfig: {// 主题设置
         navbar: [
             {// 右上导航航条 docs/.vuepress/README.md
                 text: '概述',
                 link: '/'
             }, 
             {
                 text: 'Vue 学习笔记',
                 children:[
                     {text:'笔记', link: '/guide/vue/test01.md'}, // 可不写后缀 .md
                     {text:'其它链接', link: 'https://www.baidu.com/'}// 外部链接
                 ]
             }, 
             {
                 text: 'Typescript 学习笔记',
                 children:[
                     {text:'笔记', link: '/guide/ts/'},// 以 ‘/’结束，默认读取 README.md
                     {text:'其它链接', link: 'https://www.baidu.com/'} // 外部链接
                 ]
             }
         ],
        sidebar: {//左侧列表
            '/guide/vue/': [
                 { // 对应导航中的link文件夹路径，注意这里是 ‘/’结束
                     text: 'Vue 学习',
                     children: [
                         '/guide/vue/test01.md',
                         '/guide/vue/test02.md',
                         '/guide/vue/test03.md' 
                     ]
                 }
             ],
            '/guide/ts/': [
                 {
                     text: 'Typescript 学习',
                     children: [
                         '/guide/ts/test01.md'
                     ]
                 }
             ],
            // fallback 侧边栏被最后定义
            '/': [''], //不能放在数组第一个，否则会导致右侧栏无法使用 
        }
    }
 }
 