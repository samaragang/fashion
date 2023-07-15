import './brands.css'
import hmImg from './../../img/brands/HM.png'
import obeyImg from './../../img/brands/Obey.png'
import shopifyImg from './../../img/brands/Shopify.png'
import lacosteImg from './../../img/brands/Lacoste.png'
import levisImg from './../../img/brands/Levis.png'
import amazonImg from './../../img/brands/Amazon.png'

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands__items">
          <div className="brands__item">
            <img src={hmImg} alt="H&M" />
          </div>
          <div className="brands__item">
            <img src={obeyImg} alt="Obey" />
          </div>
          <div className="brands__item">
            <img src={shopifyImg} alt="Shopify" />
          </div>
          <div className="brands__item">
            <img src={lacosteImg} alt="Lacoste" />
          </div>
          <div className="brands__item">
            <img src={levisImg} alt="Levis" />
          </div>
          <div className="brands__item">
            <img src={amazonImg} alt="Amazon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;