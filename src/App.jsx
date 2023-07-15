import './styles/App.css'
import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Brands from './components/brands/Brands'
import Arrivals from './components/arrivals/Arrivals'
import Footer from './components/footer/Footer'
import Sale from './components/sale/Sale'
import Promotion from './components/promotion/Promotion'
import Application from './components/application/Application'

function App() {

  return (
    <div className='App'>
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Promotion />
      <Application />
      <Footer />
    </div>
  )

}

export default App
