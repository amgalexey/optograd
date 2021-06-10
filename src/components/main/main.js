import React from 'react' 
import { NavLink } from 'react-router-dom'
import { Categories } from '../categories/categories'

export const Main = () => {
    return (
        <div className="wrapper">
            <h3><NavLink to="/products">Товары бля ебучие</NavLink></h3>
            <Categories/>
        </div>  
    )
}