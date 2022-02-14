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
             },
             {
              text: '其它参考',
              children:[
                  {text: 'API', link: 'https://cn.bing.com/'},
                  {
                      text: '学习视频',
                      children: [
                          {text: '慕客', link: 'https://cn.bing.com/'},
                          {text: 'B 站', link: 'https://cn.bing.com/'}
                      ]
                  },
                  {
                      text: '开源项目',
                      children: [
                          {text: '项目 01', link: 'https://cn.bing.com/'},
                          {text: '项目 02', link: 'https://cn.bing.com/'},
                          {text: '项目 03', link: 'https://cn.bing.com/'},
                          {text: '项目 04', link: 'https://cn.bing.com/'}
                      ]
                  }                   
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
        },
        plugins: [
          [
            '@vuepress/plugin-docsearch',
            {
              apiKey: '7839c146b17457844d81706bebc3ef8e',
              indexName: 'blog-guokongming',
              searchParameters: {
                facetFilters: ['tags:v2'],
              },
              locales: {
                '/zh/': {
                  placeholder: '搜索文档',
                  translations: {
                    button: {
                      buttonText: '搜索文档',
                      buttonAriaLabel: '搜索文档',
                    },
                    modal: {
                      searchBox: {
                        resetButtonTitle: '清除查询条件',
                        resetButtonAriaLabel: '清除查询条件',
                        cancelButtonText: '取消',
                        cancelButtonAriaLabel: '取消',
                      },
                      startScreen: {
                        recentSearchesTitle: '搜索历史',
                        noRecentSearchesText: '没有搜索历史',
                        saveRecentSearchButtonTitle: '保存至搜索历史',
                        removeRecentSearchButtonTitle: '从搜索历史中移除',
                        favoriteSearchesTitle: '收藏',
                        removeFavoriteSearchButtonTitle: '从收藏中移除',
                      },
                      errorScreen: {
                        titleText: '无法获取结果',
                        helpText: '你可能需要检查你的网络连接',
                      },
                      footer: {
                        selectText: '选择',
                        navigateText: '切换',
                        closeText: '关闭',
                        searchByText: '搜索提供者',
                      },
                      noResultsScreen: {
                        noResultsText: '无法找到相关结果',
                        suggestedQueryText: '你可以尝试查询',
                        openIssueText: '你认为该查询应该有结果？',
                        openIssueLinkText: '点击反馈',
                      },
                    },
                  },
                },
              },
            },
          ],
          [
            '@vuepress/plugin-google-analytics',
            {
              // we have multiple deployments, which would use different id
              id: process.env.DOCS_GA_ID,
            },
          ]
        ]
    }
  }
