
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
            <Route  exact path="/"   element={ <Cardblock url="https://fakestoreapi.com/products?limit=100"/>} ></Route>
            <Route exact path="/cloths"  element={ <Cardblock key="cloth" url="https://fakestoreapi.com/products/category/men's clothing"/>} ></Route>
            <Route exact path="/gadgets" element={ <Cardblock key="gadeget" url="https://fakestoreapi.com/products/category/electronic"/>} ></Route>
            <Route exact path="/grocerry" element={ <Cardblock key="grocerry" url="https://fakestoreapi.com/products/category/grocerry"/>} ></Route>    
  </Routes>
 
    </div>
    </Router>
    </div>
  );
}

export default App;
