
import './App.css';
import Navbar from './components/Navbar';
import Cardblock from './components/CardBoard'
function  App() {
  
 
  return (
    <div className="main">
     
      <Navbar />
  <Cardblock url="https://fakestoreapi.com/products?limit=15"/>
     
    </div>
  );
}

export default App;
