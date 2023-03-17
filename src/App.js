
import './App.css';
import Navbar from './components/Navbar';
import Cardblock from './components/CardBoard'
function  App() {
  
 
  return (
    <div className="main">
     
      <Navbar />
      <div className='cardblock-wrapper'>
  <Cardblock url="https://fakestoreapi.com/products?limit=15"/>
     
    </div>
    </div>
  );
}

export default App;
