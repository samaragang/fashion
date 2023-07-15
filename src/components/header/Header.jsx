import './header.css'
import logoImg from './../../img/icons/logo.svg'


const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__row">
               <div className="header__logo">
                  <img src={logoImg} alt="logo" />
                  <span>FASHION</span>
               </div>
               <nav className="header__nav">
                  <ul className='nav__items'>
                     <li className='nav__item'>
                        <a className='nav__link' href="/">CATALOGUE</a>
                     </li>
                     <li className='nav__item'>
                        <a className='nav__link' href="/">FASHION</a>
                     </li>
                     <li className='nav__item'>
                        <a className='nav__link' href="/">FAVOURITE</a>
                     </li>
                     <li className='nav__item'>
                        <a className='nav__link' href="/">LIFESTYLE</a>
                     </li>
                     <li className='nav__item nav__item--btn'>
                        <span className="mas">SIGN UP</span>
                        <button className='nav__link--btn' href="/">SIGN UP</button>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header;