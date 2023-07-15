import './styles/App.css'
import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Brands from './components/brands/Brands'
import Arrivals from './components/arrivals/Arrivals'
import Footer from './components/footer/Footer'
import Sale from './components/sale/Sale'

function App() {

  return (
    <div className='App'>
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Footer />
    </div>
  )

}

export default App
