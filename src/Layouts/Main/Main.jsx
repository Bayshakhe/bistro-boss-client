import React from 'react';
import Header from '../../shared/header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../shared/footer/Footer';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;