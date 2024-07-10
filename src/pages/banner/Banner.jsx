import slider1 from '../../assets/images (1).jpeg'
import slider2 from '../../assets/images (1).jpg'
import slider3 from '../../assets/images (2).jpeg'
import slider4 from '../../assets/images (2).jpg'
import slider6 from '../../assets/images (3).jpeg'
import slider8 from '../../assets/images (5).jpeg'
import slider9 from '../../assets/images (6).jpeg'


// import React, {useRef, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../banner/banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




const Banner = () => {
    return (
        <div className='h-96 mt-10 '>
            {/* <h2 className="text-4xl text-red-500"> this banner section </h2> */}
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={slider4} alt="banner" /></SwiperSlide>
                    <SwiperSlide><img src={slider1} alt="banner" /> </SwiperSlide>
                    <SwiperSlide> <img src={slider2} alt="banner" /></SwiperSlide>
                    <SwiperSlide><img src={slider3} alt="banner" /></SwiperSlide>
                    <SwiperSlide><img src={slider6} alt="banner" /></SwiperSlide>
                    <SwiperSlide><img src={slider8} alt="banner" /></SwiperSlide>
                    <SwiperSlide><img src={slider9} alt="banner" /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Banner;