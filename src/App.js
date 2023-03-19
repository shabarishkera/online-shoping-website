
import './App.css';
import Navbar from './components/Navbar';
import Cardblock from './components/CardBoard'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function  App() {
  
 
  return (
    <div className="main">
     <Router>
      <Navbar />
      <div className='cardblock-wrapper'>
        
          <Routes>
            <Route  exact path="/" element={ <Cardblock url="https://fakestoreapi.com/products?limit=15"/>} ></Route>
            <Route exact path="/cloths" element={ <Cardblock url="https://fakestoreapi.com/products?limit=15"/>} ></Route>
            <Route exact path="/gadgets" element={ <Cardblock url="https://fakestoreapi.com/products?limit=15"/>} ></Route>
            <Route exact path="/grocerry" element={ <Cardblock url="https://fakestoreapi.com/products?limit=15"/>} ></Route>    
  </Routes>
 
    </div>
    </Router>
    </div>
  );
}

export default App;
