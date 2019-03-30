import React from 'react'
import { Header } from 'src/common/header/header'
import './home.less'
import { Footer } from 'src/common/footer/footer'

const Content = () => (
  <>
    <div className="item">React</div>
    <div className="item">用于构建用户界面的 JavaScript 库</div>
  </>
)

export const Home = () => (
  <div className="container">
    <Header />
    <Content />
    <Footer />
  </div>
)
