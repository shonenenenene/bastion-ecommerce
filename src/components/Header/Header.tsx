import React, { FC } from 'react'
import Top from './top/Top'
import Body from './body/Body'
import './header.scss'

const Header:FC = () => {
  return (
    <header className= 'header'>
      <Top />
      <Body/>
    </header>
  )
}

export default Header