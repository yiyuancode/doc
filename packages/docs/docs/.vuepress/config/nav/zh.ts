import { NavItem } from 'vuepress/config'

export const NavItems4ZH: NavItem[] = [
  {
    text: '指南',
    link: '/zh/guide/'
    // link: '/guide/'
  },
  {
    text: '配置',
    link: '/zh/config/'
  },
  {
    text: '插件',
    link: '/zh/plugin/'
  },
  {
    text: '主题',
    link: '/zh/theme/'
  },
  {
    text: '了解更多',
    ariaLabel: '了解更多',
    items: [
      {
        text: 'API',
        items: [
          {
            text: 'CLI',
            link: '/zh/api/cli.html'
          },
          {
            text: 'Node',
            link: '/zh/api/node.html'
          }
        ]
      },
      {
        text: '开发指南',
        items: [
          {
            text: '本地开发',
            link: '/zh/miscellaneous/local-development.html'
          },
          {
            text: '设计理念',
            link: '/zh/miscellaneous/design-concepts.html'
          },
          {
            text: 'FAQ',
            link: '/zh/faq/'
          },
          {
            text: '术语',
            link: '/zh/miscellaneous/glossary.html'
          }
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: '从 0.x 迁移',
            link: '/zh/miscellaneous/migration-guide.html'
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
    text: 'v1.x',
    items: [
      {
        text: 'v2.x',
        link: 'https://v2.vuepress.vuejs.org/zh/'
      },
      {
        text: 'v0.x',
        link: 'https://v0.vuepress.vuejs.org/zh/'
      }
    ]
  }
]
