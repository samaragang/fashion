import './newsletter.css'

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <h1 className="newsletter__title">
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h1>
        <h3 className="newsletter__subtitle">Type your email down below and be young wild generation</h3>
        <form className='newsletter__form'>
          <input type="email" className="newsletter__input" placeholder='Add your email here' />
          <button className='input__btn' type="submit">SEND</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;