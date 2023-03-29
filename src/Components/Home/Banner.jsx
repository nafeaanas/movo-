import React from 'react';
import { Autoplay } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Movies} from '../../Data/MovieData'
function Banner() {
  return (
    <div className='relative w-full'>
        <Swiper
         direction='vertical'
         slidesPerView={1} 
         loop={true} 
         speed={1000}
         modules={[Autoplay]}
         autoplay={{ delay: 4000, disableOnInteraction: false}}
         className="w-full xl:h-96 bg-dry lg:h-64 md:h-48"
         >
        {Movies.slice(0,6).map((movie, index) => (
                <SwiperSlide key={index} className='relative rounded overflow-hidden'>
                    <img
                     src={`/images/movies/${movie.Image}`}
                     alt={movie.title}
                    
                    />
                </SwiperSlide>
            ))
        }
        </Swiper>
    </div>
  )
}

export default Banner