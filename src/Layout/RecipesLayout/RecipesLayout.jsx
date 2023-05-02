import React from 'react';
import Header from '../../pages/Home/Shared/Header/Header';
import Footer from '../../pages/Home/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const RecipesLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RecipesLayout;