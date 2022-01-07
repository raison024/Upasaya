import './App.css';
import Logo from './Assets/upasaya.png';
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';
import Page3 from './Components/Page3/Page3';
import Page4 from './Components/Page4/Page4';
import Page5 from './Components/Page5/Page5';
import Footer from './Components/Footer/Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-nav'>
          <img src={Logo} className='App-logo' alt='UpasayaLogo'/>
          <Link to="/contact" className='Contact-button'>Contact Us</Link>
        </div>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Footer />
      </header>
    </div>
  );
}

export default App;
