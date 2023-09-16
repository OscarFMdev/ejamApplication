import React from 'react'
import FooterStyles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={FooterStyles.footerContainer}>
        <div className={FooterStyles.rightSide}>
          <p className={FooterStyles.copyright}>Copyright &copy; 2023</p>
          <p>Clarifionsupport@clarifion.com</p>
        </div>
        <div className={FooterStyles.leftSide}>
          <img src="/assets/lock.svg" alt="lock icon" />
          <p>Secure 256-bit SSL encryption.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer