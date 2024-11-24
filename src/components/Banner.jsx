import AOS from 'aos';
import React, { useContext } from 'react';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.jpg';
import { AuthContext } from '../routes/AuthProvider';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
AOS.init();

const Banner = () => {
    const { name } = useContext(AuthContext);
    return (
        <div className=''>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
                <SwiperSlide>
                    <div className="hero md:h-[500px] bg-banner bg-cover">
                        <div className="hero-content flex items-center justify-center px-12 lg:px-5">
                            <div data-aos="fade-right" data-aos-duration="1500">
                                <h1 className="text-5xl md:text-6xl font-semibold">Discover the <span className='text-[#4dc879]'>path</span> to your <span className='text-[#4dc879]'>dreams</span> with our <span className='text-[#4dc879]'>service.</span></h1>
                                <p className="py-6 text-gray-600">
                                    Career Counseling is your trusted partner in shaping your professional future. We offer personalized career advice, interactive tools, and valuable resources to help you make informed decisions and achieve your goals. Let us guide you every step of the way!
                                </p>
                            </div>
                            <div className='hidden lg:block'
                               data-aos="fade-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1500">
                                <img className=''
                                    src={banner1} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero md:h-[500px] bg-banner bg-cover">
                        <div className="hero-content flex items-center justify-center px-12 lg:px-5">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-semibold">Unleash Your <span className='text-[#4dc879]'>True Potential </span><span className='text-[#4dc879]'>With</span> Our Exceptional <span className='text-[#4dc879]'>Service.</span></h1>
                                <p className="py-6 text-gray-600">
                                    Start your journey toward success with our tailored service designed to guide you every step of the way. We are committed to helping you overcome challenges, explore opportunities, and achieve the dreams you've always envisioned.!
                                </p>
                            </div>
                            <div className='hidden lg:block'
                                data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="2000">
                                <img className=''
                                    src={banner2} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero md:h-[500px] bg-banner bg-cover">
                        <div className="hero-content flex items-center justify-center px-12 lg:px-5">
                            <div>
                                <h1 className="text-5xl md:text-6xl font-semibold">Turn Your <span className='text-[#4dc879]'>Dreams into </span><span className='text-[#4dc879]'>Reality</span> with our <span className='text-[#4dc879]'>Support.</span></h1>
                                <p className="py-6 text-gray-600">
                                    Embark on a journey toward achieving your aspirations with our dedicated service. We provide the tools, guidance, and support you need to make your dreams a reality and create a future you’ve always envisioned
                                </p>
                            </div>
                            <div className='hidden lg:block'
                                data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="2000">
                                <img className='rounded-xl'
                                    src={banner3} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;