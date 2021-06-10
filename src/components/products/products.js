import React, { useState, useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'


import { Card } from './card'

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    let {pageId} = useParams()
    const LIMIT = 20;
    useEffect(() => {
        axios
          .get(`https://admin.optograd.by/api/products/`,  { params: { limit: LIMIT, offset: page * LIMIT } })
          .then(({ data }) => {
              setProducts(data.results)
            });
      }, [page]);

      
    return (
        <div className="wrapper">
            <h1>ХУИТА. ЩА ВЪЕБУ</h1>

                {products.map(({ image, title, content,slug }) => (
                    <Card  key={slug} image={image} title={title} content={content} slug={slug}  />
                ))}
                <div> <Link to={`/products/${pageId + 1}}`}>next</Link></div>
                <div><Link to={`/products/${pageId - 1}`}>prev</Link></div>
               {/* <button disabled={page === 36 } onClick={() => setPage(page + 1)}>next</button> */}
               {/* <button disabled={page <= 0} onClick={() => setPage(page -1)}>prev</button> */}
                <div><Link to={`/`}>Главная</Link></div>
        </div>
    )
}