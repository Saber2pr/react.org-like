import React, { useState } from 'react'
import './blog.less'

const HeaderContentItem = ({ links }: { links: string[] }) => (
  <span className="header_content_item">
    {links.map(link => (
      <a className="header_content_items" href="#">
        {link}
      </a>
    ))}
  </span>
)

const HeaderContentHead = () => (
  <a className="header_content_head" href="#">
    Head
  </a>
)

const HeaderContentFoot = () => (
  <a className="header_content_foot" href="#">
    Foot
  </a>
)

const HeaderContent = () => (
  <nav className="header_content">
    <HeaderContentHead />
    <HeaderContentItem links={['Home', 'Blog', 'About']} />
    <HeaderContentFoot />
  </nav>
)

const Header = () => (
  <div className="header">
    <HeaderContent />
  </div>
)

const Routes = () => <div className="routes">Routes</div>

const RoutesSmart = () => <div className="routes_smart">RoutesSmart</div>

const Content = () => <div className="content">Content</div>

const SmartBtn = ({ onClick }: { onClick: Function }) => (
  <div className="smartBtn" onClick={() => onClick()}>
    X
  </div>
)

const Main = () => {
  const [state, setState] = useState(false)
  return (
    <div className="main">
      <Content />
      <Routes />
      {state && <RoutesSmart />}
      <SmartBtn onClick={() => setState(!state)} />
    </div>
  )
}

const Footer = () => <div>Footer</div>

export const Blog = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
)
