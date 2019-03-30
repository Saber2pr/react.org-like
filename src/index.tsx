import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Router } from 'saber-router'
import { Home } from './pages/home/home'
import { Blog } from './pages/blog/blog'
import { blogRoutes } from './routes/blogs'

const render = (element: React.FunctionComponentElement<any>) =>
  ReactDOM.render(element, document.getElementById('root') as HTMLElement)

Router([
  {
    path: '/',
    callback: () => render(<Home />)
  },
  ...blogRoutes.map(({ href }) => ({
    path: href,
    callback: () => render(<Blog href={href} />)
  }))
])

registerServiceWorker()
