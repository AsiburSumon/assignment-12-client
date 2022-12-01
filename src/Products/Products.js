import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const {brand} = useParams();
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then( data => {
            const remain = data.filter(product => product.brand === brand);
            setProducts(remain);
        })
    }, [brand])
    return (
        <div className='my-10 mx-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:mx-40'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;