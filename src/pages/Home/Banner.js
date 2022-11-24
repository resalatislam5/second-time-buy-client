import React from 'react';
import banner from '../../ass/banner.png'

const Banner = () => {
    return (
        <div className='text-white relative'>
            <div className='w-full'>
            <img className='' src={banner} alt="banner" />
            </div>
            <div className='absolute top-1/3 ml-[5%]'>
            <h2 className="text-7xl">Second Hand <br /> Motor Bike/Scooter</h2>
                    <p className='py-5 text-[#E7E7E7]'>Tour the city of Dallas on an electric bike & see what the city has to <br /> offer or just rent & go!</p>
                <div className="">
                <button className="btn bg-[#EC6861] px-5 text-xl hover:bg-[#f57871]">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;