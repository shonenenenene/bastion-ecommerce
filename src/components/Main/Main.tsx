import React from 'react'
import MainHead from './mainHead/MainHead'
import MainBody from './mainBody/MainBody'
import './style.scss'

const Main = () => {
  return (
    <main className='main'>
          <MainHead />
          <MainBody/>
    </main>
  )
}

export default Main