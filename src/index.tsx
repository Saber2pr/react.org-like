import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Home } from './pages/home/home'
import { Blog } from './pages/blog/blog'
import { blogRoutes } from './routes/blogs'
import './index.less'
import { Router, Routes } from 'saber-router'

const update = (element: React.FunctionComponentElement<any>) =>
  ReactDOM.render(element, document.getElementById('root'))

const routes: Routes = blogRoutes.reduce<Routes>(
  (routes, { href }) => ({
    ...routes,
    [href]: () => update(<Blog href={href} />)
  }),
  {
    '/': () => update(<Home />)
  }
)

Router(routes)

registerServiceWorker()
