import React from "react";
import ReactDOM from "react-dom";
import starimage from "../images/25533.jpg"
export default function Card(props)
{
return (
<>
<div className="card">
<img src={props.img} className="main-image"/> 
<div className="card-status">
<img src={starimage} className="star-image"/>
<span>{props.rating}</span>
<span>({props.round})</span>
<span>{props.country}</span>
</div>
<p >{props.title}</p>
<p>From <strong> {props.price}</strong>/person</p>
</div>
</>
)

}