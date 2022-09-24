import React from 'react';
import { useTitle } from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    useTitle("Home");

    return (
        <div className="" id='home'>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;