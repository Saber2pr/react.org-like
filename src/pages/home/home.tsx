import React from 'react'
import { Header } from 'src/common/header/header'
import './home.less'

const Content = () => (
  <>
    <div className="item">logo</div>
  </>
)

export const Home = () => (
  <div className="container">
    <Header />
    <Content />
  </div>
)
