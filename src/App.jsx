import 'modern-css-reset/dist/reset.min.css';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Home } from './Pages/Home';
import NewsletterModal from './Components/NewsletterModal/NewsletterModal';
// import NavbarTop from './Components/Navbar/NavbarTop/NavbarTop';

function App() {
  return (
    <div>
      <NewsletterModal/>
     <Home/>
    </div>
  )
}

export default App
