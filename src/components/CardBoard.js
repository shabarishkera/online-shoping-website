import React from 'react'
import Card from './Card';
import { useEffect } from 'react';
import { useState } from 'react';
import DealoftTheDay from './DealoftTheDay';
export default function Cardblock(props) {
  const [data, setdata] = useState([]);
  const [loading, isloading] = useState(true);
  const fetchdata = async () => {
    const responce = await fetch(props.url);
    const dat = await responce.json();
    setdata(dat);
    isloading(false);

  };
  useEffect(() => {  fetchdata(); }, []);
  console.log(data);
  return (
    <>
      {data.length >= 3 ? <DealoftTheDay data={data} /> : null}
      <div className='card-container'>
        {loading && <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>}

        {data && data.map((item) => {
          return (
            <Card img={item.image} rating={item.rating.rate} round={item.rating.count} title={item.title} price={item.price} key={item.id} />);
        })
        }

      </div>
    </>
  )
}
