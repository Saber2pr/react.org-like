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
    name: '文档',
    href: '/blog'
  },
  {
    name: '教程',
    href: '/blog'
  },
  {
    name: '社区',
    href: '/blog'
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
      <a className="header_content_items" href={'#' + href} key={'hci' + index}>
        {name}
      </a>
    ))}
  </span>
)

const image_source =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'

const HeaderContentHead = () => (
  <span className="header_content_head">
    <a href="#/" className="header_content_head_anchor">
      <img src={image_source} className="header_content_head_img" />
      React
    </a>
  </span>
)

const HeaderContentFoot = () => (
  <a className="header_content_foot" href="#/">
    GitHub
  </a>
)
