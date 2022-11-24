import React from 'react';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import ElectricBikes from './Categories/ElectricBikes';
import LatestStories from './LatestStories';


const Home = () => {
    return (
        <div>
            <Banner />
            <AdvertisedItems />
            <ElectricBikes />
            <LatestStories />
        </div>
    );
};

export default Home;