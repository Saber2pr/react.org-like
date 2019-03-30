type BlogRoutes = {
  name: string
  content: string
  href: string
}[]

export const blogRoutes: BlogRoutes = [
  {
    name: 'Helloworld',
    content:
      '尝试React最简单的方法是使用CodePen上的Hello World例子。如果你不想安装任何东西，可以在浏览器中打开它，然后跟着尝试我们接下来的例子。如果你更愿意使用本地开发环境，可以查看安装页面 。',
    href: '/blog'
  },
  {
    name: 'JSX 简介',
    content:
      '你可以任意地在 JSX 当中使用 JavaScript 表达式，在 JSX 当中的表达式要包含在大括号里。',
    href: '/blog/jsx'
  }
]
