import React from 'react';
import Banner from '../Banner/Banner';
import AboutItaly from '../AboutItaly/AboutItaly';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1>This is home page</h1>
            <Categories></Categories>
            <AboutItaly></AboutItaly>
        </div>
    );
};

export default Home;