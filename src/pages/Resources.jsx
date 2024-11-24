import React from 'react';
import book1 from '../assets/new-book.webp';
import book2 from '../assets/old-book.webp';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
AOS.init();

const Resources = () => {
    return (
        <div className='max-w-7xl mx-auto my-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-5 '>
            <Helmet>
                <title>Resources | Career Counseling </title>
            </Helmet>
            <div className='border p-5 rounded-xl flex flex-col items-center'>
                <h1 className='text-2xl font-semibold text-red-600'>13 Career-success Strategies</h1>
                <div data-aos="zoom-in" data-aos-duration="2000">
                    <img src={book2} alt="" />
                </div>
                <div className='text-gray-600 space-y-2'>
                    <p className='text-justify'>This eBook reveals 13 powerful and proven strategies that can help you achieve career success. Each chapter dives into specific, actionable steps that professionals can implement to grow in their respective fields. From enhancing personal skills to mastering professional networks, this guide is designed to lead you toward a more fulfilling and prosperous career.</p>
                    <p><span className='font-semibold'>For Whom: </span>For working professionals who want to accelerate their career growth, improve their performance, and achieve their professional goals faster.</p>
                    <p><span className='font-semibold'>Atuhor: </span>Dr. Nandkishore Rathi</p>
                    <p><span className='font-semibold'>Total No. of pages: </span>38</p>
                    <p><span className='font-semibold'>Price: </span><span className='text-red-600 font-semibold'>Free</span></p>
                    <div className='flex gap-2'>
                        <p><span className='font-semibold'>Price: </span><span className='text-red-600 font-semibold'>Free</span></p>
                        <Link to="https://drive.google.com/file/d/1dat85lYh8XYb-vy0oElf_gVU-tawtIz6/view?usp=drive_link" target='_blank' className='text-red-600 font-semibold hover:text-green-600 hover:underline'>Download</Link>
                    </div>
                </div>
            </div>
            <div className='border p-5 rounded-xl flex flex-col items-center'>
                <h1 className='text-2xl font-semibold text-red-600'>8-Point Alert on Being in the Wrong Job</h1>
                <div data-aos="zoom-in" data-aos-duration="2000">
                    <img src={book1} alt="" />
                </div>
                <div className='text-gray-600 space-y-2'>
                    <p className='text-justify'>This insightful eBook highlights the 8 signs that indicate you may be stuck in the wrong job. From lack of growth to constant dissatisfaction, this guide helps professionals identify whether they need to make changes in their career paths. The book offers actionable advice for anyone who feels out of place in their current role and is looking for clarity and direction.</p>
                    <p><span className='font-semibold'>For Whom: </span>For working professionals who feel unfulfilled, stuck, or unsure about their current career and are contemplating a career shift.</p>
                    <p><span className='font-semibold'>Atuhor: </span>Dr. Nandkishore Rathi</p>
                    <p><span className='font-semibold'>Total No. of pages: </span>30</p>
                    <div className='flex gap-2'>
                        <p><span className='font-semibold'>Price: </span><span className='text-red-600 font-semibold'>Free</span></p>
                        <Link to="https://drive.google.com/file/d/1BMxy_1e1UYxUyar-G9XoCBsS_f4NlAcV/view?usp=drive_link" target='_blank' className='text-red-600 font-semibold hover:text-green-600 hover:underline'>Download</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;