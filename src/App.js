import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function  App() {
  
  const [data,setdata]=useState([]);
  const  fetchdata= async()=>{
   const responce= await fetch("https://fakestoreapi.com/products?limit=15");
   const dat=await responce.json();
   setdata(dat);

  };
  useEffect(()=>{fetchdata();},[]);
  console.log(data[0]);
  return (
    <div className="App">
      <div className='navbar-container'>
      <Navbar />
      </div>
      <div  className='card-container'>
 { data&&data.map((item)=>{
return (
 <Card img={item.image} rating={item.rating.rate} round={item.rating.count} title={item.title} price={item.price} key={item.id}/>);
 })
}

    </div>
    </div>
  );
}

export default App;
