import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            <div className='h-16'><Navbar></Navbar></div>
            <div className='min-h-[calc(100vh-454px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;