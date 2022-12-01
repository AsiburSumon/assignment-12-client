import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState ([]);
    useEffect(()=> {
        fetch("http://localhost:5000/categories")
        .then((res)=> res.json())
        .then((data)=> setCategories(data))
    }, [])
    return (
        <div className='my-4'>
            <h1 className='text-2xl my-2 font-sans font-bold'>All Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;