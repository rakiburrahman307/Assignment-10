
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useEffect, useState } from 'react';
import BrandCard from './BrandCard';

const Home = () => {


  const [brands, setBrands] =useState([]);

  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(data=>{
       setBrands(data)
     })
  },[]);

  return (
    <div>
   <div className='mb-8'>   <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/gmPWb4k/akram-huseyn-8jmb-Yi-I7qa8-unsplash.jpg"
            className="w-full object-cover rounded-lg shadow-md"
            alt="Rolse Royle"
          />
          <div className="absolute top-36 left-0 right-0 bottom-0 flex flex-col items-center justify-start">
            <h1 className="text-5xl font-bold text-white mb-4">Rolse Royle</h1>
            <p className="text-lg text-white text-left">Rolls-Royce PLC, major British manufacturer of aircraft engines, marine propulsion systems, and power-generation systems.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/JnnMVnz/fernando-marques-dz-ZV4-Pp-Q-NI-unsplash.jpg"
            className="w-full object-cover rounded-lg shadow-md"
            alt="BMW"
          />
          <div className="absolute top-36 left-0 right-0 bottom-0 flex flex-col items-center justify-start">
            <h1 className="text-4xl font-bold text-white mb-4">BMW</h1>
            <p className="text-lg text-white">The worlds leading manufacturer of premium automobiles and motorcycles, and provider of premium financial and mobility services.
</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            src="https://i.ibb.co/Qm7ybnV/aaron-huber-8q-YE6-LGHW-c-unsplash.jpg"
            className="w-full object-cover rounded-lg shadow-md"
            alt="Slide 3"
          />
          <div className="absolute top-36 left-0 right-0 bottom-0 flex flex-col items-center justify-start">
            <h1 className="text-4xl font-bold text-white mb-4">Mercedes-Benz</h1>
            <p className="text-lg text-white">It develops, manufactures and distributes premium and luxury cars and vans.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper></div>

   <div>
    <h2 className='text-black font-bold text-center text-5xl mb-6'>Our Brands</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 mx-2 md:mx-24 lg:mx-32 px-6 '>
    {
      brands.map(brands =><BrandCard key={brands.id} brands={brands}></BrandCard>)
    }
    </div>
   </div>
    </div>
  );
};

export default Home;
