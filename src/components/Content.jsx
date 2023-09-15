import React from 'react'
import contentStyles from '../styles/Content.module.scss'

const Content = () => {
  return (
    <main>
        <div className={contentStyles.leftSide}>
          <img src="/src/assets/main-img.svg" alt="how Clarifion works image"/>
          <img src="/src/assets/testimonial.svg" alt="testimonial image"/>
        </div>
        <div className={contentStyles.rightSide}>
          <h2><span>One time only</span> special price for 6 extra Clarifion for only $14 each ($84.00 total!)</h2>
          <div className={contentStyles.appSection}>
            <img src="/src/assets/app-img.svg" alt="app image" className={contentStyles.appImg}/>
            <div>
              <div className={contentStyles.header}>
                <h3>Clarifion Air Ionizer</h3>
                <div className={contentStyles.prices}>
                  <p>$180</p>
                  <p>$84</p>
                </div>
              </div>
              <div className={contentStyles.stock}>
                <img src="/src/assets/radio-btn.svg" alt="in stock icon" className={contentStyles.radio}/>
                <p>12 left in Stock</p>
              </div>
              <img src="/src/assets/stars.svg" alt="5 stars rating" />
              <p className={contentStyles.appDesc}>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
            </div>
          </div>
          <ul className={contentStyles.features}>
            <li>
              <img src="/src/assets/tick.svg" alt="tick icon" />
              <p>Negative Ion Technology may <span>help with allergens</span></p>
            </li>
            <li>
              <img src="/src/assets/tick.svg" alt="tick icon" />
              <p>Designed for air rejuvenation</p>
            </li>
            <li>
              <img src="/src/assets/tick.svg" alt="tick icon" />
              <p>Perfect for every room in all types of places.</p>
            </li>
          </ul>
        </div>
    </main>
  )
}

export default Content