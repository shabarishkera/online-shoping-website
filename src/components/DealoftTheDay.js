import React, { useState } from 'react'

export default function DealoftTheDay(props) {
  const [data,setdata]=useState(props.data)
  return (
 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 img-fluid" src={data[0].image}alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>{data[0].title}</h5>
    <p>From {data[0].price}</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={data[1].image}alt="Second slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>{data[1].title}</h5>
    <p>From {data[1].price}</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={data[2].image} alt="Third slide"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>{data[2].title}</h5>
    <p>From {data[2].price}</p>
  </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

  )
}
