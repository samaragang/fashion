import './application.css'
import appImg from './../../img/images/vouchers-img.png'
import appStoreImg from './../../img/icons/app-store.png'
import googlePlayImg from './../../img/icons/google-play.png'

const Application = () => {
  return (
    <section className="application">
      <div className="container">
        <div className="application__inner">
          <div className="application__content">
            <h1 className="application__title">
              DOWNLOAD APP &
              GET THE VOUCHER!
            </h1>
            <h4 className="application__description">
              Get 30% off for first transaction using
              Rondovision mobile app for now.
            </h4>
            <div className="application__links">
              <a href='/' className="app-store__link">
                <img src={appStoreImg} alt="appStoreImg" />
              </a>
              <a href='/' className="google-play__link">
                <img src={googlePlayImg} alt="googlePlayImg" />

              </a>
            </div>
          </div>
          <div className="application__img">
            <img src={appImg} alt="application" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Application;