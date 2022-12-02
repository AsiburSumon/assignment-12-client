import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Loading from '../Loading/Loading';

const BookingModal = () => {
    const {id, brand} = useParams();
    const {user} = useContext(AuthContext);
    const [bookData, setBookData] = useState({});
    const [loaction, setLocation] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(()=> {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setBookData(data))
    }, [id])

    const handleBook = event => {
        event.preventDefault();
        const form = event.target;
        const phone = form.phone.value;
        const location = form.location.value;

        const bookedProduct = {
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            buyerImg: user?.photoURL,
            brand: bookData?.brand,
            productName: bookData?.productName,
            productImage: bookData?.image,
            price: bookData?.resalePrice,
            location,
            phone
        }

        fetch('http://localhost:5000/bookingOrders', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert("Booking Successfully Done")
                form.reset();
            }
        })
        .catch(error => console.error(error))
    }
    return (
       <>
        <div>
            <div className='text-center w-full'>
                <label className='btn btn-primary w-full' htmlFor='booking-modal'>Book Product</label>
            </div>
            <input type="checkbox" id="booking-modal" className='modal-toggle'/>
            <div className='modal'>
                <div className='modal-box relative'>
                <label htmlFor='booking-modal' className='btn btn-sm btn-circle absolute right-2 top-2'>X</label>
                <div>
                <img src={bookData?.image} alt="no img" />
                </div>
                     {
                        bookData ?
                        <form onSubmit={handleBook} className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text" name="displayName" disabled defaultValue={user?.displayName} placeholder="Your Name" className='input input-bordered w-full'/>
                        <input style={{height: "100px", width: "100px"}} type="image" src={user?.photoURL}name="photoURL" disabled  alt="no img" placeholder="Your Photo" className='input input-bordered w-full' />
                        <input type="text" name="email" disabled defaultValue={user?.email} placeholder="Your Email" className='input input-bordered w-full'/>
                        <input type="text" name="brandName" disabled defaultValue={brand} placeholder="Brand Name" className='input input-bordered w-full'/>
                        <input type="text" name="ProductName" disabled defaultValue={bookData?.productName} placeholder="Product Name" className='input input-bordered w-full'/>
                        <input type="text" name="productImage" disabled defaultValue={bookData?.image} className='input input-bordered w-full'/>
                        <input type="text" name="price" disabled defaultValue={bookData?.resalePrice} placeholder="Resale Price" className='input input-bordered w-full'/>
                        <input onChange={(a) => setPhone(a.target.value)} type="text" name="phone" placeholder="Phone Number" className='input input-bordered w-full'/>
                        <input onChange={(a) => setLocation(a.target.value)} type="text" name="phone" placeholder="Phone Number" className='input input-bordered w-full'/> <br />
                        <input className='btn btn-accent text-white' type="submit" value="Submit" />
                    </form>
                    :
                    <Loading></Loading>
                     }
                </div>
            </div>
            
        </div>
       </>
    );
};

export default BookingModal;