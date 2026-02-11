import React from 'react'


import {logo} from '../assets/index.js'

function Header() {
  return (
    <>
       <header>
            <img src={logo} alt="globecon" />
            <h1>my travel journal.</h1>
        </header>
    </>
  )
}

export default Header
