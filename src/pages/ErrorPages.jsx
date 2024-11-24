import React from 'react';
import errorPages from '../assets/404-status-code.png';
import { Helmet } from 'react-helmet-async';

const ErrorPages = () => {
    return (
        <div className='flex flex-col h-screen items-center justify-center gap-4'>
            <Helmet>
                <title>Error Pages | Career Counseling</title>
            </Helmet>
            <h1 className='text-6xl font-semibold text-center'>Data Not Found 404!</h1>
            <img className='max-w-2xl rounded-xl' src={errorPages} alt="" />
        </div>
    );
};

export default ErrorPages;