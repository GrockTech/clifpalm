// // App.js
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // includes Popper
// import './App.css';

// import Navbar from '../src/components/Navbar';
// import HeroSection from '../src/components/Hero';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AdminLogin from './components/AdminLogin';
// import Dashboardform from './components/Adminshipmentform';
// import ShipmentList from './components/ShipmentList';
// function App() {
//   return (
//     <div className="App container" id='animate'>
//       <Router>
//         {/* Navbar is shown on all pages */}
//         <Navbar />

//         {/* Routes control what else shows */}
//         <Routes>
//           {/* Homepage */}
//           <Route path="/" element={<HeroSection />} />

//           {/* Admin login page */}
//           <Route path="/admin" element={<AdminLogin />} />
//           <Route path="/dashboard" element={<Dashboardform />} />
//           <Route path="/listshipments" element={<ShipmentList />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import { Routes, Route } from "react-router-dom";
import AdminLogin from './components/AdminLogin';
import Dashboardform from './components/Adminshipmentform';
import ShipmentList from './components/ShipmentList';

function App() {
  return (
    <div className="App container" id='animate'>
      {/* Navbar is shown on all pages */}
      <Navbar />

      {/* Routes control what else shows */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboardform />} />
        <Route path="/listshipments" element={<ShipmentList />} />
      </Routes>
    </div>
  );
}

export default App;
