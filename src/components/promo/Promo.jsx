import './promo.css'
import promoImg from './../../img/images/header-img.jpg'
const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className='highlight'>
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className='highlight highlight--yellow'>
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className="promo__description">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn-wrapper">
              <a href="/">Shop Now</a>
            </div>
          </div>
          <div className="promo__image">
            <img src={promoImg} alt="promoImg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo;