import React from 'react'
import Card  from './Card';
import { useEffect } from 'react';
import { useState } from 'react';
import Spinner from './spinner';
export default function Cardblock(props) {
    const [data,setdata]=useState([]);
    const[loading,isloading]=useState(true);
    const  fetchdata= async()=>{
     const responce= await fetch(props.url);
     const dat=await responce.json();
     setdata(dat);
      isloading(false);

    };
    useEffect(()=>{fetchdata();},[]);
    console.log(data[0]);
  return (
    <div  className='card-container'>
      {loading&&<Spinner /> }
           { data&&data.map((item)=>{
   return (
    <Card img={item.image} rating={item.rating.rate} round={item.rating.count} title={item.title} price={item.price} key={item.id}/>);
    })
   }
   
       </div>
  )
}
