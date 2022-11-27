import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisedItems = () => {
    const {data : advertise = []} = useQuery({
        queryKey: ['advertise'],
        queryFn: async () =>{
            const res = await fetch('https://second-time-bye-server.vercel.app/advertise',{
                headers:{
                    authorization:`bearer ${localStorage.getItem('product-token')}`
                  }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            { advertise.length > 0 &&
        <section className='mx-40 my-28 h-[600px]'>
            <div className='flex justify-between mb-12'>
                <h2 className="text-[#100707] text-4xl font-bold">Advertised items</h2>
                <Link to='/alladvertise' className='text-[#EC6861] text-lg'>View all</Link>
            </div>
            <div className='grid grid-cols-4 absolute'>
                {
                    advertise.slice(0,4).map(e => <div  className='w-[400px] h-[448px] hover:h-[512px] hover:bg-white hover:shadow-lg p-4 bg-[#F9F9F9] rounded-xl Electric '>
                        <div className='mb-10 mt-7 flex justify-center'>
                            <img className='w-64 h-64' src={e.img} alt="" />
                        </div>
                        <div>
                            <h3 className="text-[#100707] font-bold text-2xl">{e.name}</h3>
                            <p className='text-[#676767] font-semibold text-lg'>{e.resalePrice}</p>
                            <Link to={`/product-details/${e._id}`} ><button className="btn bg-[#1A2A49] w-full mt-6 hidden Electric-btn">Add to cart</button></Link>
                        </div>
                        
                    </div>)
                }
            </div>
        </section>
        }
        </div>
    );
};

export default AdvertisedItems;