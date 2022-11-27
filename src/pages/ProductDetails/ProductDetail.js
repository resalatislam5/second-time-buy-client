import React, { useContext } from 'react';
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { Link, useLoaderData } from 'react-router-dom';
import Modal from '../../Components/Modal/ProductModal';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';


const ProductDetail = () => {
    const product = useLoaderData();
    const {user} = useContext(AuthContext)
    const {name,img,location,originalPrice,resalePrice,yearsofuse,verified,_id} = product;
      const handleReport = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/reportedproduct/${id}`    ,{
          method: 'PUT',
      })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            toast.success('Report successfully')
        })
    }
    return (
        <section>
            <Modal name={user?.displayName}
                email={user?.email}
                itemName={name}
                price={resalePrice}
                image = {img}
            />
           <div className='mx-40 my-28'>
        <div className='grid grid-cols-3 gap-16'>
            <div className="col-span-2 border rounded-lg p-5 flex items-center">
                 <img className="w-[500px] h-[628px] mx-auto " src={img} alt=""/>
            </div>
            <div className="border border-[#E7E7E7] h-[799.95px] w-[560.43px] p-10">
                <h3 className="text-[#100707] text-4xl font-bold">{name}</h3>
                <p className='text-[#100707] text-2xl font-semibold py-5'>${resalePrice}</p>
                <hr className='mt-6'/>
                <p className="text-[#676767] text-lg py-5 flex items-center gap-3">Share this product :
                <FaFacebook className="text-2xl" />
                <FaTwitterSquare className="text-2xl" />
                <AiFillInstagram className="text-2xl" />
                <AiFillYoutube className="text-2xl" />
                </p>
                <hr />
                <p className='text-[#100707] text-2xl font-semibold py-5'>Location : <span>{location}</span></p>
                <hr />
                <hr />
                <p className='text-[#100707] text-2xl font-semibold py-5'>Original price : <span className='text-[#EC6861]'>${originalPrice}</span></p>
                <hr />
                <hr />
                <p className='text-[#100707] text-2xl font-semibold py-5'>Resale price : <span className='text-[#EC6861]'>${resalePrice}</span></p>
                <hr />
                <hr />
                <p className='text-[#100707] text-2xl font-semibold py-5'>Years of use : <span>{yearsofuse}</span></p>
                <hr />
                <div className="flex justify-end mt-5 ">
                    {
                        verified ?
                        <p className="text-[#676767] text-lg flex items-center gap-2"><BsCheck2Circle /> Verify</p>
                        :
                        <p className="text-[#676767] text-lg flex items-center gap-2">Not Verify</p>
                    }
                </div>
            <div className='mt-5'>
            <label htmlFor="my-modal" className="btn bg-[#EC6861] px-5 text-xl hover:bg-[#f57871] border-0 w-full" to='/'>Buy Now</label>
            <button className="btn btn-outline text-[#1A2A49]  px-5 text-xl  w-full mt-5" onClick={()=>handleReport(_id)}>Report</button>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
};

export default ProductDetail;