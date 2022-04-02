import React,{useState, useEffect } from 'react'
import axios from 'axios';
import './Navbar.css';
import { Link } from 'react-router-dom';
export const Product = () => {
    const[productData, setProductData]=useState([])
    const baseUrl=`http://localhost:3001`;

    const getProductData=()=>{
        axios.get(`${baseUrl}/product`)
        .then((res)=>{
            console.log('prod ', res);
            setProductData(res.data)
        })
    }
    useEffect(()=>{
        getProductData();
    },[])
  return (
    <div>
        <h1>Hiii product comp</h1>
        <table>
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Product Details</th>
                </tr>
            </thead>
            <tbody>
                {
                    productData.map((item,index)=>{
                        const{name, id, price}=item;
                        return(
                            <tr key={id}>
                                <td> { index+1} </td>
                                <td> {id } </td>
                                <td> {name} </td>
                                <td> {price } </td>
                                <td> <Link style={{color:'black'}} to={`/products/${id}`}>product details</Link> </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}
