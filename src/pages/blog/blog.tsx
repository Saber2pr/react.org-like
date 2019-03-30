import React, { useState } from 'react'
import './blog.less'
import { Header } from 'src/common/header/header'
import { blogRoutes } from 'src/routes/blogs'
import { Footer } from 'src/common/footer/footer'
import { A } from 'use-routes'

const RouteBase = ({
  routes,
  type,
  onClick
}: {
  routes: { name: string; href: string }[]
  type: 'routes' | 'routes_smart'
  onClick?: Function
}) => (
  <div className={type}>
    {routes.map(({ name, href }, index) => (
      <div key={href + index}>
        <A href={href} key={name + index} onClick={() => onClick && onClick()}>
          {name}
        </A>
      </div>
    ))}
  </div>
)

const Routes = ({ routes }: { routes: { name: string; href: string }[] }) => (
  <RouteBase routes={routes} type="routes" />
)

const RoutesSmart = ({
  routes,
  onClick
}: {
  routes: { name: string; href: string }[]
  onClick: Function
}) => <RouteBase routes={routes} type="routes_smart" onClick={onClick} />

const Content = ({ content }: { content: string }) => (
  <div className="content">
    <p>{content}</p>
    <Footer />
  </div>
)

const SmartBtn = ({ onClick, inner }: { onClick: Function; inner: string }) => (
  <div className="smartBtn" onClick={() => onClick()}>
    {inner}
  </div>
)

const Main = ({ href }: { href: string }) => {
  const [open, setOpened] = useState(false)
  const current = blogRoutes.find(b => b.href === href) || blogRoutes[0]
  return (
    <div className="main">
      <Content content={current.content} />
      <Routes routes={blogRoutes} />
      {open && (
        <RoutesSmart routes={blogRoutes} onClick={() => setOpened(false)} />
      )}
      <SmartBtn onClick={() => setOpened(!open)} inner={open ? 'X' : 'O'} />
    </div>
  )
}

export const Blog = ({ href }: { href: string }) => (
  <>
    <Header />
    <Main href={href} />
  </>
)
