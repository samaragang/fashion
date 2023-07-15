import './footer.css'
import facebookImg from './../../img/socials/fb.svg'
import instagramImg from './../../img/socials/inst.svg'
import twitterImg from './../../img/socials/tw.svg'
import linkedinImg from './../../img/socials/in.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__social">
            <h1 className="footer__title">Fashion</h1>
            <h3 className="footer__description">Complete your style with awesome clothes from us.</h3>
            <div className="social__items">
              <a href="/" className="social__link">
                <img src={facebookImg} alt="facebook" />
              </a>
              <a href="/" className="social__link">
                <img src={instagramImg} alt="instagram" />
              </a>
              <a href="/" className="social__link">
                <img src={twitterImg} alt="twitter" />
              </a>
              <a href="/" className="social__link">
                <img src={linkedinImg} alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="footer__links">
            <div className="links__group">
              <h4 className="links__title">Company</h4>
              <a href='/' className="links__item">About</a>
              <a href='/' className="links__item">Contact us</a>
              <a href='/' className="links__item">Support</a>
              <a href='/' className="links__item">Careers</a>
            </div>
            <div className="links__group">
              <h4 className="links__title">Quick Link</h4>
              <a href='/' className="links__item">Share Location</a>
              <a href='/' className="links__item">Orders Tracking</a>
              <a href='/' className="links__item">Size Guide</a>
              <a href='/' className="links__item">FAQs</a>
            </div>
            <div className="links__group">
              <h4 className="links__title">Legal</h4>
              <a href='/' className="links__item">Terms & conditions</a>
              <a href='/' className="links__item">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;