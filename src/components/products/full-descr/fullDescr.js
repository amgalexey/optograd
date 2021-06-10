import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'

export const FullDescr = () => {
    const {slug} = useParams();
    const [isLoading,setIsLoading] = useState(true)
    const [product,setProduct] = useState({});

    useEffect(()=> {
        axios
            .get(`https://admin.optograd.by/api/products/${slug}`)
            .then(({data}) => {
                setProduct(data)
                setIsLoading(false)
            })
    }, [slug])

    if(isLoading) {
        return <h1>Загрузочка</h1>
    }
    
    return (
        <div className="wrapper prod"> 
        <div className="card">
            <h4>{product.title}</h4>
            <img src={product.image} alt={"logo"}/> 
            <p>{product.content}</p>
            <Link to={`/products`}>Назад</Link>
        </div>
    </div>
    )
}