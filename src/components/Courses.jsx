import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { NavLink } from "react-router-dom";
AOS.init();

const Courses = ({ course }) => {
    const { id, image, category, counselor, counselor_photo, description, duration, lessons, pricing, rating, serviceName } = course;
    useEffect(() => {
        AOS.init({
            duration: 2000, 
            once: true,
        });
    }, []);
    return (
        <div className="rounded-xl border p-4">
            <div className="relative" data-aos="zoom-in">
                <div>
                    <img
                        src={image}
                        alt="Digital Marketing"
                        className="w-full rounded-xl object-cover" />
                </div>
                <div className="w-20 h-20 absolute -top-14 right-2 bg-[#eb5942] text-white text-sm font-semibold px-3 py-1 rounded-full ">
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">${pricing}</p>
                </div>
            </div>
            <div className="py-4">
                <div className="flex justify-between items-center">
                    <span className="text-sm bg-blue-100 text-blue-600 font-medium px-2 py-1 rounded-md">
                        {category}
                    </span>
                    <span className="flex items-center text-yellow-500">
                        {rating}<span className="ml-1">⭐</span>
                        <span className="ml-1">⭐</span>
                        <span className="ml-1">⭐</span>
                    </span>
                </div>
                <div className="mt-3">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {serviceName}
                    </h2>
                </div>
                <div className="flex items-center my-3 justify-between">
                    <div className="flex items-center">
                        <img
                            src={counselor_photo}
                            alt="Instructor"
                            className="w-12 h-12 rounded-full mr-3" />
                        <p className="text-base font-medium text-gray-800">{counselor}</p>
                    </div>
                    <div>
                        <NavLink to={`/services/${id}`}
                            className="btn btn-outline text-blue-500 font-semibold">
                            View Course
                        </NavLink>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-6 text-gray-600 text-sm">
                    <span className="flex gap-1 text-[#eb5942]  items-center">
                        <MdOutlineSlowMotionVideo className="" size={20} />
                        {lessons}
                    </span>
                    <span className="flex items-center text-[#eb5942] gap-1">
                        <IoTimeOutline size={20} />
                        {duration}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Courses;
