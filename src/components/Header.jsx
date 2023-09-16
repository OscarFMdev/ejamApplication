import React, { useEffect, useState } from 'react'
import headerStyles from '../styles/Header.module.scss'

const Header = () => {
  const [showSteps, setShowSteps] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Toggle the flag to show/hide steps based on screen width
      setShowSteps(screenWidth > 1120);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
    <div className={headerStyles.upperPart}>
      <a href='/'>
        <img src="/src/assets/logo.svg" alt="logo" className={headerStyles.logo}/>
      </a>
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
      {showSteps ? (
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
        ) : (
          <ul className={headerStyles.stepsSmall}>
            <li>
            <img src="/src/assets/done.svg" alt="" />
            <p>Cart Review</p>
          </li>
          <li>
            <img src="/src/assets/done.svg" alt="" />
            <p>Checkout</p>
          </li>
          <li className={headerStyles.currentStep}>
            <img src="/src/assets/current.svg" alt="" />
            <p>Special Offer</p>
          </li>
          <li>
            <img src="/src/assets/next.svg" alt="" />
            <p>St: Confirmation</p>
          </li>
          </ul>
        )}
        
    </div>
    </header>
  )
}

export default Header