import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-[#272727] text-white text-sm">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-10  py-14 max-w-7xl mx-auto px-5'>
                <nav className='lg:col-span-4 space-y-4'>
                    <div className='mb-2'>
                        <Link to="/" className="text-xl font-bold">
                            <h1 className='text-3xl'>Career <span className='text-[#4dc879]'>Counseling</span> </h1>
                        </Link>
                    </div>
                    <p className=''>Our popular services include personalized career assessments, one-on-one counseling sessions, and expert-curated resources to help you explore, plan, and excel in your career path.</p>
                    <div className='flex items-center'>
                        <input className='py-4 px-6 rounded-l-xl outline-none text-gray-500 w-full sm:w-1/2' type="text" placeholder='Enter Your Email' />
                        <input className='bg-[#eb5942] py-4 px-4 rounded-r-xl' type="submit" value="Send" />
                    </div>
                    <div className='flex gap-4'>
                        <Link className='border border-gray-400 rounded-full p-1'><FaFacebook size={22} /></Link>
                        <Link className='border border-gray-400 rounded-full p-1'><FaInstagram size={22} /></Link>
                        <Link className='border border-gray-400 rounded-full p-1'><FaTwitter size={22} /></Link>
                    </div>
                </nav>
                <nav className='lg:col-span-2 flex flex-col space-y-4'>
                    <h6 className="text-xl mb-2">Useful links</h6>
                    <Link className="link link-hover">About</Link>
                    <Link className="link link-hover">Services</Link>
                    <Link className="link link-hover">Mentors</Link>
                    <Link className="link link-hover">Blogs</Link>
                </nav>
                <nav className='lg:col-span-2 flex flex-col space-y-4'>
                    <h6 className="text-xl mb-2">Top categories</h6>
                    <Link className="link link-hover">Personalized Counseling</Link>
                    <Link className="link link-hover">Educational Counseling</Link>
                    <Link className="link link-hover">Professional Development</Link>
                    <Link className="link link-hover">Mock Interview Practice</Link>
                </nav>
                <nav className='lg:col-span-2 flex flex-col space-y-4'>
                    <h6 className="text-xl mb-2">Help & support</h6>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Privacy Policy</Link>
                    <Link className="link link-hover">Terms</Link>
                    <Link className="link link-hover">Conditions</Link>
                </nav>
            </div>
            <div className='border border-gray-500'></div>
            <p className='text-center py-3'>Copyright © 2024 Coaching Lab.</p>
        </footer>
    );
};

export default Footer;