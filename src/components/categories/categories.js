import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


export const Categories = () => {
    const [ctg, setCtg] = useState([])
    
    useEffect(() => {
        axios
            .get('https://admin.optograd.by/api/options/')
            .then(({data}) => {
                console.log(data);
                setCtg(data)
            })
    })

    return (
        <ul>
        {ctg.map(({ slug,title }) => (
          <li>
                  <Link to={`/catalogs/${slug}`}>${title}</Link>
          </li>
        ))}
      </ul>
    )
}