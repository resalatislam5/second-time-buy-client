import React from 'react';
import { Link } from 'react-router-dom';
import LatestStory from '../../ass/LatestStories.png'
import img1 from '../../ass/image 15.png'
import CommonButton from '../../Components/Button/CommonButton';

const LatestStories = () => {
    return (
        <section className='lg:mx-40 mx-5 lg:my-28 my-10'>
        <div className='mb-12 text-center'>
            <h2 className="text-[#100707] lg:text-4xl text-2xl font-bold">In-City Wheels Latest Stories</h2>
        </div>
        <div className='grid lg:gap-16  lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            <div className="col-span-2">
                <img src={LatestStory} alt="" />
            </div>
            <div className="flex flex-col justify-center gap-8">
                <h3 className="text-[#100707] lg:text-3xl text-xl font-bold">Our Electirc Bikes</h3>
                <p className="text-[#676767] text-lg">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean blandit, diam in venenatis porta, eros quam facilisis velit, et pharetra risus diam et nulla. Praesent aliquam ex egestas </p>
            <Link to='/'><CommonButton text={'Watch Now'} /></Link>
            </div>
        </div>
        <div className='grid  lg:gap-16 mt-12  lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                [...Array(3)].map(e => <div  className='lg:w-[509px] w-80 mx-auto my-5 lg:my-0 lg:h-[425px] hover:shadow-lg  Electric shadow-xl rounded-xl'>
                    <div className='lg:relative'>
                        <img src={img1} className='h-[220px] w-full' alt="" />
                        <div className='w-20 h-24 bg-white lg:absolute top-0 right-8 rounded-b-lg text-center items-center flex'>
                            <p className="">24 Feb 2022</p>
                        </div>
                        <div className="p-7 pr-28">
                        <h3 className="text-[#100707] text-2xl font-bold mb-3">Compare RadCity Classic vs. RadCity 5 Plus</h3>
                        <p className='text-[#676767] font-semibold text-base'>Deciding on the right commuter ebike for you? Compare our award-winning RadCity ebikes - both the RadCity Classic models...</p>
                        </div>
                    </div>
                    
                </div>)
            }
        </div>
    </section>
    );
};

export default LatestStories;