import './App.css';

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Order from "./pages/Order"
import Home from "./pages/Home"
import About from "./pages/About"
import Hero from "./components/Hero"

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes> 
      <Header/>
      <Routes>
      <Route path="/order" element={<Order/>}/>
      <Route path="/" element={<Home/>}/>
      </Routes> 
     <Footer/>
    </Router>

  );
}

export default App;
