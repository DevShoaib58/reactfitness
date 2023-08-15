import React from 'react';
import HomeBanner from '../Components/HomeBanner';
import SearchExecise from '../Components/SearchExecise';
import Exersice from '../Components/Exersice';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <SearchExecise />
            <Exersice />
        </div>
    );
};

export default Home;