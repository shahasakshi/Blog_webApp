import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>

        </div>
        <img 
        className='headerImg'
        src='https://images.unsplash.com/photo-1591827217518-105035b8e740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt=''/>
    </div>
  )
}

export default Header