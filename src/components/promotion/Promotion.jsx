import './promotion.css'
import Card from "../card/Card";
import promo01Img from './../../img/images/promo-01.jpg'
import promo02Img from './../../img/images/promo-02.jpg'

const Promotion = () => {
  return (
    <section className="promotion">
      <div className="container">
        <div className="promotion__header">
          <h1 className="title-2">
            Young’s Favourite
          </h1>
        </div>
        <div className="promotion__cards">
          <Card title='Trending on instagram'
            cardImg={promo01Img} />
          <Card title='All Under $40'
            cardImg={promo02Img} />
        </div>
      </div>
    </section>
  );
}

export default Promotion;