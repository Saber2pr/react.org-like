import React from 'react'
import { Header } from 'src/common/header/header'
import './home.less'
import { Footer } from 'src/common/footer/footer'

const Content = () => (
  <div className="content_head">
    <div className="title">React</div>
    <div className="infor">用于构建用户界面的 JavaScript 库</div>
  </div>
)

export const Home = () => (
  <div className="container">
    <Header />
    <div className="content_container">
      <Content />
    </div>
    <Footer />
  </div>
)
