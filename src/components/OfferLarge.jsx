import contentStyles from '../styles/Content.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai';

const OfferLarge = () => {
  return (
    <>
      <div className={contentStyles.leftSide}>
          <img src="/assets/main-img.svg" alt="how Clarifion works image"/>
          <img src="/assets/testimonial.svg" alt="testimonial image"/>
        </div>
        <div className={contentStyles.rightSide}>
          <h2><span>One time only</span> special price for 6 extra Clarifion for only $14 each ($84.00 total!)</h2>
          <div className={contentStyles.appSection}>
            <img src="/assets/app-img.svg" alt="app image" className={contentStyles.appImg}/>
            <div className={contentStyles.appContent}>
              <div className={contentStyles.header}>
                <h3>Clarifion Air Ionizer</h3>
                <div className={contentStyles.prices}>
                  <p>$180</p>
                  <p>$84</p>
                </div>
              </div>
              <div className={contentStyles.stock}>
                <img src="/assets/radio-btn.svg" alt="in stock icon" className={contentStyles.radio}/>
                <p>12 left in Stock</p>
              </div>
              <img src="/assets/stars.svg" alt="5 stars rating" />
              <p className={contentStyles.appDesc}>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
            </div>
          </div>
          <ul className={contentStyles.features}>
            <li>
              <img src="/assets/tick.svg" alt="tick icon" />
              <p>Negative Ion Technology may <span>help with allergens</span></p>
            </li>
            <li>
              <img src="/assets/tick.svg" alt="tick icon" />
              <p>Designed for <span>air rejuvenation</span></p>
            </li>
            <li>
              <img src="/assets/tick.svg" alt="tick icon" />
              <p><span>Perfect for every room</span> in all types of places.</p>
            </li>
          </ul>
          <div className={contentStyles.discount}>
            <img src="/assets/percentage.svg" alt="percentage icon"/>
            <p>Save <span>53%</span> and get <span>6 extra Clarifision</span> for only <span>$14 Each.</span></p>
          </div>
          <section className={contentStyles.claimSection}>
            <button>
              <p>Yes - Claim my discount</p>
              <AiOutlineArrowRight />
            </button>
            <div className={contentStyles.pay}>
              <div>
                <p>Free shipping</p>
              </div>
              <span className="vertical-bar">|</span>
              <div>
                <img src="/assets/lock-mini.svg" alt="lock icon" />
                <p>Secure 256-bit SSL encryption.</p>
              </div>
              <span className="vertical-bar">|</span>
              <div>
                <img src="/assets/pay-methods.svg" alt="pay methods icons" />
              </div>
            </div>
            <div>
              <a href="#">No thanks, I don&apos;t want this</a>
            </div>
          </section>

          <section className={contentStyles.guaranteeSection}>
            <img src="/assets/certified.svg" alt="guaranteed image" />
            <p>If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
          </section>

        </div>
    </>
  )
}

export default OfferLarge