import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
    const [images,setImages] = useState(null)
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const location = form.location.value;
        const number = form.mobileNumber.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const yearsofuse = form.yearsofuse.value;
        const condition = form.condition.value;
        const image = form.image.files[0];
        const categoryname = form.select.value
        const product = {
            name: name,
            location: location,
            originalPrice,
            resalePrice,
            yearsofuse,
            categoryname,
            condition ,
            number,
            img:images,
            email:user.email
        }
        console.log(product)
        const data = new FormData()
        data.append('image', image)
        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbd_key}`,{
            method:'POST',
            body:data
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data.success)
            if(data.success){
                setImages(data.data.url)
                fetch(`http://localhost:5000/products`,{
                    method: 'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.acknowledged){
                        toast.success('product add successfully')
                        form.reset()
                        navigate('/dashboard/myproducts')
                    }
                    console.log(data)
                })
            }
        }).catch(error =>{
            console.log(error)
            const message = error.message;
            return toast.error(message)
        })         
    }
    return (
        <div className='mx-20 flex justify-center'>
            <div>
            <h2 className="text-2xl font-bold my-5">Add A Product</h2>
            <form onSubmit={handleSignUp} className='flex flex-col gap-4 border p-4 w-96'>
                    <label className='text-xl font-semibold'>Name:</label>
                    <input className='border p-3  rounded-lg' type="text" name="name" placeholder='Enter Your Product Name' id="" required/>
                    <select className="select select-bordered w-full" name='select'>
                        <option selected>Electirc Bikes</option>
                        <option>Microbus</option>
                        <option>Luxury Car</option>
                    </select>
                    <label className='text-xl font-semibold'>Location:</label>
                    <input className='border p-3 rounded-lg' type="text" name="location" placeholder='Enter Your location' id="" required/>
                    <label className='text-xl font-semibold'>Condition :</label>
                    <input className='border p-3 rounded-lg' type="text" name="condition" placeholder='Enter Product Condition ' id="" required/>
                    <label className='text-xl font-semibold'>Number :</label>
                    <input className='border p-3 rounded-lg' type="number" name="mobileNumber" placeholder='Enter Your Number' id="" required/>
                    <label className='text-xl font-semibold'>Original Price:</label>
                    <input className='border p-3 rounded-lg ' type="number" name="originalPrice" placeholder='Enter product Original Price' id="" required/>
                    <label className='text-xl font-semibold'>Resale Price</label>
                    <input className='border p-3 rounded-lg ' type="number" name="resalePrice" placeholder='Enter product Resale Price' id="" required/>
                    <label className='text-xl font-semibold'>Years Of Use</label>
                    <input className='border p-3 rounded-lg ' type="number" name="yearsofuse" placeholder='Enter product Years Of Use' id="" required/>
                    <input type="file" id="image" className="file-input w-full max-w-xs " />
                    <input className='border p-3 btn' type="submit" value="Register" />
             </form>
            </div>
        </div>
    );
};

export default AddProduct;