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
    <div className={headerStyles.steps}>
      <ul>
        <li>
          <img src="/src/assets/done.svg" alt="" />
          <p>Step 1 : Cart Review</p>
        </li>
        <li>
          <img src="/src/assets/done.svg" alt="" />
          <p>Step 2 : Checkout</p>
        </li>
        <li className={headerStyles.currentStep}>
          <img src="/src/assets/current.svg" alt="" />
          <p>Step 3 : Special Offer</p>
        </li>
        <li>
          <img src="/src/assets/next.svg" alt="" />
          <p>Step 4 : Confirmation</p>
        </li>
      </ul>
    </div>
    </header>
  )
}

export default Header