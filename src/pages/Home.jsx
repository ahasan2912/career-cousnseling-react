import React, { useState } from 'react';
import { Link, NavLink, useLoaderData, useLocation } from 'react-router-dom';
import Banner from '../components/Banner';
import Courses from '../components/Courses';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const services = useLoaderData();
    const [serviceData, setServiceData] = useState(services.slice(0, 6));
    const loation = useLocation();
    const handleallShow = (show) => {
        if (show === 'show-more') {
            setServiceData(services);
        }
    }
    return (
        <div>
            <Helmet>
                <title>Home | Career Counseling</title>
            </Helmet>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto pb-14'>
                <div>
                    <h1 className='text-center text-5xl md:text-6xl font-semibold mt-14'>Our popular <span className='text-[#4dc879]'>services</span></h1>
                    <p className='text-center sm:w-[60%] mx-auto mt-4'>Our popular services include personalized career assessments, expert-guided counseling sessions, and curated resources for skill development. We help you explore career options, set achievable goals, and build a roadmap to success!</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-20 pb-8 gap-x-8 gap-y-14 px-5'>
                    {
                        serviceData.map(course => <Courses key={course.id} course={course}></Courses>)
                    }
                </div>
                <div className=''>
                    <Link onClick={() => handleallShow('show-more')} className='btn btn-outline text-blue-500 font-semibold ml-5'>Show More</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;