import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function  App() {
  var data;
    fetch('https://fakestoreapi.com/products?limit=5')
  .then(res=>res.json())
  .then(json=>console.log(data=json));
 
  return (
    <div className="App">
    <Card img={require("./images/image.jpg")} rating="5" round="6" country="usa" title="jonh wick " price="250"/>
    </div>
  );
}

export default App;
