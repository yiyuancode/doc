import { NavItem } from 'vuepress/config'

export const NavItems4EN: NavItem[] = [
  {
    text: '前端开发',
    link: '/guide/',
    items:[
      {
        text: '开发工具',
        items: [
          {
            text: '后端',
            link: '/api/cli.html'
          },
          {
            text: '前端',
            link: '/api/node.html'
          }
        ]
      },
    ]
  },
  {
    text: '后端开发',
    link: '/guide/',
    items:[
      {
        text: '开发工具',
        items: [
          {
            text: '后端',
            link: '/api/cli.html'
          },
          {
            text: '前端',
            link: '/api/node.html'
          }
        ]
      },
    ]
  },
  {
    text: 'Java',
    link: '/config/'
  },
  {
    text: '数据库｜缓存',
    ariaLabel: 'Learn More',
    items: [
      {
        text: 'API',
        items: [
          {
            text: 'CLI',
            link: '/api/cli.html'
          },
          {
            text: 'Node',
            link: '/api/node.html'
          }
        ]
      },
      {
        text: 'Contributing Guide',
        items: [
          {
            text: 'Local Development',
            link: '/miscellaneous/local-development.html'
          },
          {
            text: 'Design Concepts',
            link: '/miscellaneous/design-concepts.html'
          },
          {
            text: 'FAQ',
            link: '/faq/'
          },
          {
            text: 'Glossary',
            link: '/miscellaneous/glossary.html'
          }
        ]
      },
      {
        text: 'Resources',
        items: [
          {
            text: 'Migrate from 0.x',
            link: '/miscellaneous/migration-guide.html'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          }
        ]
      }
    ]
  },
  {
    text: 'Vue',
    link: '/plugin/'
  },
  {
    text: 'Uniapp',
    link: '/theme/'
  },
  {
    text: '算法',
    link: '/theme/'
  },
  // {
  //   text: 'v1.x',
  //   items: [
  //     {
  //       text: 'v2.x',
  //       link: 'https://v2.vuepress.vuejs.org'
  //     },
  //     {
  //       text: 'v0.x',
  //       link: 'https://v0.vuepress.vuejs.org'
  //     }
  //   ]
  // }
]
