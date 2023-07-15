import s from './card.module.css'
import arrowImg from './../../img/icons/arrow.svg'

const Card = ({ title, cardImg }) => {
  return (
    <div className={s.card}>
      <a className={s.card__link} href="/"></a>
      <img className={s.card__img} src={cardImg} alt='Img' />
      <div className={s.card__body}>
        <div className={s.card__text}>
          <div className={s.card__title}>{title}</div>
          <div className={s.card__hint}>
            Explore Now!
          </div>
        </div>
        <div className={s.card__icon}>
          <img className={s.card__icon} src={arrowImg} alt="arrowImg" />
        </div>
      </div>
    </div>
  );
}

export default Card;