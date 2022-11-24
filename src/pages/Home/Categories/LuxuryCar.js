import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import bike from '../../../ass/Rad-Runner-Ebike 1_ccexpress 1.png'
import '../Home.css'

const LuxuryCar = () => {
    const {data : luxuryCar = []} = useQuery({
        queryKey: ['luxury-car'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/luxury-car');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='mx-40 my-28 h-[600px]'>
        <div className='flex justify-between mb-12'>
            <h2 className="text-[#100707] text-4xl font-bold">Luxury Car</h2>
            <p className='text-[#EC6861] text-lg'>View all</p>
        </div>
        <div className='grid grid-cols-4 absolute'>
            {
                luxuryCar.slice(0,4).map(e => <div  className='w-[400px] h-[448px] hover:h-[512px] hover:bg-white hover:shadow-lg p-4 bg-[#F9F9F9] rounded-xl Electric ' key={e._id}>
                    <div className='mb-10 mt-7'>
                        <img src={e.img} alt="" />
                    </div>
                    <div>
                        <h3 className="text-[#100707] font-bold text-2xl">{e.name}</h3>
                        <p className='text-[#676767] font-semibold text-lg'>{e.resalePrice}</p>
                        <Link to={`/product-details`} ><button className="btn bg-[#1A2A49] w-full mt-6 hidden Electric-btn">Add to cart</button></Link>
                    </div>
                    
                </div>)
            }
        </div>
    </section>
    );
};

export default LuxuryCar;