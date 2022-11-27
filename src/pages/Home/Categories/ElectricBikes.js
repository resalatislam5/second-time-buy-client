import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css'

const ElectricBikes = () => {
    const {data : electriBikes = []} = useQuery({
        queryKey: ['electriBikes'],
        queryFn: async () =>{
            const res = await fetch('https://second-time-bye-server.vercel.app/electirc-bikes');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <section className='lg:mx-40  lg:my-28 my-10 lg:h-[600px]'>
            <div className='flex justify-between mb-12'>
                <h2 className="text-[#100707] lg:text-4xl font-bold text-2xl">Shop Electric Bikes</h2>
                <Link to='allbikes' className='text-[#EC6861] text-lg'>View all</Link>
            </div>
            <div className='grid xl:grid-cols-4 lg:absolute lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 lg:gap-0'>
                {
                    electriBikes.slice(0,4).map(e => <div  className='lg:w-[400px] mx-auto w-[23rem] lg:h-[448px] lg:hover:h-[512px] hover:bg-white hover:shadow-lg p-4 bg-[#F9F9F9] rounded-xl Electric' key={e._id}>
                        <div className='mb-10 mt-7 flex justify-center'>
                            <img className='w-64 h-64' src={e.img} alt="" />
                        </div>
                        <div>
                            <h3 className="text-[#100707] font-bold text-2xl">{e.name}</h3>
                            <p className='text-[#676767] font-semibold text-lg'>${e.resalePrice}</p>
                            <Link to={`/product-details/${e._id}`} ><button className="btn bg-[#1A2A49] w-full mt-6 lg:hidden Electric-btn">Add to cart</button></Link>
                        </div>
                        
                    </div>)
                }
            </div>
        </section>
        </div>
    );
};

export default ElectricBikes;