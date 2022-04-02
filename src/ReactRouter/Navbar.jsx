import React from 'react'
import { Home } from './Home'
import { ProductDetails } from './ProductDetails'
import { Product } from './Product';
import { Link } from 'react-router-dom';
import './Navbar.css';
export const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to={`/products/${0}`}>ProductDetails</Link>
    </div>
  )
}
