import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export const ProductDetails = () => {
    const [data, setData] = useState([]);
    const[loading, setLoading]= useState(false);
    const[error, setError]=useState(false);
    const { id } = useParams();
    console.log("params ", id);
    const baseUrl = `http://localhost:3001`;
    const getProductById = () => {
        axios
            .get(`${baseUrl}/product/${id}`)
            .then((res) => {
                if(Object.keys(res.data)==0){
                    setLoading(true)
                }
                console.log("get by id ", res.data);
                setData(res.data);
            })
            .catch((er) => {
                console.log("errrrrrrrrrrrrrrr", er);
                setError(true)
            });
    };
    useEffect(() => {
        getProductById();
    }, []);
    return (
        <div>
            <h1>Product details comp: {id} </h1>
            {error&&(<h3> product id not found</h3>)}
               {!error&&data!==undefined&&(
                    <div>
                    <h3>Name : {data?.name} </h3>
                    <h3>Id : {data?.id} </h3>
                    <h3>Price : {data?.price} </h3>
                </div>
               )}
        </div>
    );
};
