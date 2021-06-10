import React from 'react'
import { Link } from "react-router-dom";

export const Card = ({ image, title, content,slug }) => (
    <div className="wrapper prod"> 
        <div className="card">
            <h4>{title}</h4>
            <img src={image} alt={"logo"}/> 
            <p>{content}</p>
            <Link to={`/products/details/${slug}`}>ПОСМОТРЕТЬ БЛЯТЬ</Link>
        </div>
    </div>
  );
  