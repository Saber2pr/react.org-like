import React from 'react'
import { Header } from 'src/common/header/header'
import './home.less'
import { Footer } from 'src/common/footer/footer'

const Content = () => (
  <>
    <div className="item">logo</div>
  </>
)

export const Home = () => (
  <div className="container">
    <Header />
    <Content />
    <Footer />
  </div>
)
