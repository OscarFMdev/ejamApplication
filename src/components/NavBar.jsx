import React from 'react'
import navStyles from '../styles/NavBar.module.scss'
const NavBar = () => {
  return (
    <nav className={navStyles.navigation}>
      <ul>
        <li>
          <img src="/src/assets/quality.png" alt="quality" className={navStyles.navImg1}/>
          <p>30-DAY SATISFACTION GUARANTEE</p>
        </li>
        <li>
          <img src="/src/assets/truck-light.png" alt="truck" className={navStyles.navImg2}/>
          <p>Free delivery on orders over $40.00</p>
        </li>
        <li>
          <img src="/src/assets/heart.png" alt="heart" className={navStyles.navImg3}/>
          <p>50.000+ HAPPY CUSTOMERS</p>
        </li>
        <li>
          <img src="/src/assets/money-back.png" alt="money back" className={navStyles.navImg4}/>
          <p>100% Money Back Guarantee</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar