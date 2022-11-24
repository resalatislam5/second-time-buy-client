import React from 'react';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import ElectricBikes from './Categories/ElectricBikes';


const Home = () => {
    return (
        <div>
            <Banner />
            <AdvertisedItems />
            <ElectricBikes />
        </div>
    );
};

export default Home;