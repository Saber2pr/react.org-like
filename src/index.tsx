import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Home } from './pages/home/home'
import { Blog } from './pages/blog/blog'
import { blogRoutes } from './routes/blogs'
import { useRoutes, Routes } from 'use-routes'

const routes: Routes = blogRoutes.reduce<Routes>(
  (routes, { href }) => ({
    ...routes,
    [href]: () => <Blog href={href} />
  }),
  {
    '/': () => <Home />
  }
)

const App = () => useRoutes(routes)

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)

registerServiceWorker()
