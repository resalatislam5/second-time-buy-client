import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const AllMicrobus = () => {
    const {data : microbus = []} = useQuery({
        queryKey: ['microbus'],
        queryFn: async () =>{
            const res = await fetch('https://second-time-bye-server.vercel.app/microbus');
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className='mx-40 my-28'>
        <div className='mb-12'>
            <h2 className="text-[#100707] text-4xl font-bold">Shop Luxury Car</h2>
        </div>
        <div className='grid grid-cols-3 gap-32'>
            {
                microbus.map(e => <div  className='w-[400px] h-[512px] bg-[#F9F9F9] shadow-lg p-4  rounded-xl ' key={e._id}>
                    <div className='mb-10 mt-7 flex justify-center'>
                        <img className='w-64 h-64' src={e.img} alt="" />
                    </div>
                    <div>
                        <h3 className="text-[#100707] font-bold text-2xl">{e.name}</h3>
                        <p className='text-[#676767] font-semibold text-lg'>${e.resalePrice}</p>
                        <Link to={`/product-details/${e._id}`} ><button className="btn bg-[#1A2A49] w-full mt-6 ">Add to cart</button></Link>
                    </div>
                    
                </div>)
            }
        </div>
    </section>
    );
};

export default AllMicrobus;