import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
AOS.init();

const Services = () => {
    const { id, image, category, counselor, counselor_photo, description, duration, lessons, pricing, rating, serviceName } = useLoaderData();
    const [feedback, setFeedback] = useState("");
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, [location]);

    const handleSubmint = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const textarea = e.target.text.value;
        setFeedback({
            name: name,
            textarea: textarea
        })
        e.target.name.value = "";
        e.target.text.value = "";
    }
    return (
        <div className="w-full lg:max-w-5xl mx-auto px-2 py-0 sm:px-4 sm:py-4 rounded-xl my-10">
            <Helmet>
                <title>Service | Career Counseling </title>
            </Helmet>
            <div className="lg:col-span-8">
                <div data-aos="zoom-in" data-aos-duration="2000">
                    <img className="rounded-xl w-full h-[200px] md:h-[450px]" src={image} alt="" />
                </div>
                <div className="mt-4">
                    <h1 className="text-2xl font-semibold text-gray-600">Sarvice Name: {serviceName}</h1>
                    <h2 className="text-2xl font-semibold text-gray-600">Sarvice Category: {category}</h2>
                    <h1 className="text-2xl font-semibold text-gray-600">Mentor Name: {counselor}</h1>
                    <p className="text-2xl font-semibold text-gray-600">Price: ${pricing}</p>
                    <p className="text-gray-600 text-justify">{description}</p>
                </div>
            </div>
            <div>
                <div className="">
                    <div className="">
                        <form onSubmit={handleSubmint} className=" py-2 rounded-xl ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Please enter your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Feedback</span>
                                </label>
                                <textarea type="text" rows="10" cols="50" placeholder="Strat now your feedback" className="input input-bordered" name="text" required></textarea>
                            </div>
                            <div className="form-control mt-6 sm:w-52 ">
                                <button type="submit" className="btn btn-primary text-white">Submit Your Feedback</button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-4">
                        <div className="border p-5 rounded-xl mt-3 space-y-3">
                            <h1><span className="text-lg font-semibold text-gray-600">Name: </span>{feedback.name}</h1>
                            <p><span className="text-lg font-semibold text-gray-600">Feedback: </span>{feedback.textarea}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
