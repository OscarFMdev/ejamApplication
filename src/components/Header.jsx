import React from 'react'
import headerStyles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header>
    <div className={headerStyles.upperPart}>
      <img src="/src/assets/logo.svg" alt="logo" />
      <div>
        <img src="/src/assets/mcafee.svg" alt="logo" />
        <img src="/src/assets/norton.svg" alt="logo" />
      </div>
    </div>
    <div className={headerStyles.lowerPart}>
      <h1>Wait ! your order in progress.</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing </h2>
    </div>

    </header>
  )
}

export default Header