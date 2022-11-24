import React from 'react';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import ElectricBikes from './Categories/ElectricBikes';
import LuxuryCar from './Categories/LuxuryCar';
import Microbus from './Categories/Microbus';
import LatestStories from './LatestStories';


const Home = () => {
    return (
        <div>
            <Banner />
            <AdvertisedItems />
            <ElectricBikes />
            <Microbus />
            <LuxuryCar />
            <LatestStories />
        </div>
    );
};

export default Home;