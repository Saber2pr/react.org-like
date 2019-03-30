import React from 'react'
import './header.less'

export const Header = () => (
  <div className="header">
    <HeaderContent />
  </div>
)

type Links = {
  name: string
  href: string
}[]

const links: Links = [
  {
    name: 'Blog',
    href: '#/blog'
  }
]

const HeaderContent = () => (
  <nav className="header_content">
    <HeaderContentHead />
    <HeaderContentItem links={links} />
    <HeaderContentFoot />
  </nav>
)

const HeaderContentItem = ({ links }: { links: Links }) => (
  <span className="header_content_item">
    {links.map(({ name, href }, index) => (
      <a className="header_content_items" href={href} key={'hci' + index}>
        {name}
      </a>
    ))}
  </span>
)

const HeaderContentHead = () => (
  <a className="header_content_head" href="#/">
    Home
  </a>
)

const HeaderContentFoot = () => (
  <a className="header_content_foot" href="#/">
    Foot
  </a>
)
