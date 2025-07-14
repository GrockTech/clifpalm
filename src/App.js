// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes Popper

import logo from './logo.svg';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/components/Navbar';
import HeroSection from '../src/components/Hero';
// import OtherP from './components/OtherP';
// import AboutP from './components/AboutP';


function App() {
  return (
    <div className="App container" id='animate'>

<Navbar/>
<HeroSection/>
{/* <OtherP/> */}
{/* <AboutP/> */}
         </div>
  );
}

export default App;
