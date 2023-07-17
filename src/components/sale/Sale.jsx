import './sale.css'
import saleImg from './../../img/images/promo-img.png';

const Sale = () => {
  return (
    <section className="sale">
      <img src={saleImg} alt="" />
      <div className="sale__content">
        <h1 className="sale__title">
          <span className='highlight highlight--sale__white'>
            <span>PAYDAY</span>
          </span>
          SALE NOW
        </h1>
        <div className="sale__text">
          Spend minimal $100 get 30% off
          voucher code for your next purchase
        </div>
        <div className="sale__date">
          <strong> 1 June - 10 June 2021 </strong>
          <span> *Terms & Conditions apply</span>

        </div>
        <div className="sale__btn">

          <a href='/'>SHOP NOW</a>
        </div>
      </div>
    </section>
  );
}

export default Sale;