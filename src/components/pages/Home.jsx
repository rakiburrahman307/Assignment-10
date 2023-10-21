import { Swiper, SwiperSlide } from 'swiper/react';
import Marquee from "react-fast-marquee";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './styles.css';
import { useEffect, useState } from 'react';
import BrandCard from './BrandCard';
import ChooseUs from './ChooseUs';
import Service from './Services';

const Home = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        setBrands(data);
      });
  }, []);

  return (
    <div className='mx-auto'>
      <div className='mb-8 mx-auto'>
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
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/gmPWb4k/akram-huseyn-8jmb-Yi-I7qa8-unsplash.jpg"
                className="w-full object-cover rounded-lg mx-auto"
                alt="Rolse Royle"
              />
              <div className="absolute top-24 left-0 right-0 bottom-0 flex flex-col items-center justify-start">
                <h1 className="text-5xl font-bold text-white mb-4">Rolse <span className='text-red-500'>Royle</span></h1>
                <p className="text-lg hidden md:flex text-white md:font-bold text-center w-auto">Rolls-Royce PLC, major British manufacturer of aircraft engines <span className='text-[#ff8c00]'>propulsion systems and power-generation systems.</span></p>
              </div>
            </div></SwiperSlide>
          <SwiperSlide> <div className="relative">
            <img
              src="https://i.ibb.co/pPX9fpk/devon-janse-van-rensburg-yoq-HLUay-UTg-unsplash.jpg"
              className="w-full object-cover rounded-lg mx-auto"
              alt="BMW"
            />
            <div className="absolute top-24 left-0 right-0 bottom-0 flex flex-col items-center justify-start">
              <h1 className="text-4xl font-bold text-white mb-4" data-aos="fade-right">BM<span className='text-red-700'>W</span></h1>
              <p className="text-lg hidden md:flex md:font-bold text-[#ffd700] text-center w-auto " data-aos="fade-left">The worlds leading manufacturer of premium automobiles and motorcycles and <span className='text-orange-600'> premium financial and mobility services.</span>
              </p>
            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="relative">
            <img
              src="https://i.ibb.co/Qm7ybnV/aaron-huber-8q-YE6-LGHW-c-unsplash.jpg"
              className="w-full object-cover rounded-lg mx-auto"
              alt="Slide 3"
            />
            <div className="absolute top-24 left-0 right-0 bottom-0 flex flex-col items-center justify-start">
              <h1 className="text-4xl font-bold text-white mb-4">Mercedes <span className='text-red-600' data-aos="fade-left">Benz</span></h1>
              <p className="text-lg hidden md:flex md:font-bold text-gray-600 text-center w-auto" data-aos="fade-left">It develops, manufactures and distributes premium and <span className='text-purple-600'>luxury cars and vans.</span></p>
            </div>
          </div></SwiperSlide>
        </Swiper>
      </div>

      <div className='mx-auto'>
        <h2 className='font-bold text-center text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8' data-aos="fade-left">Our <span className='text-green-400'>Brands</span></h2>
        <Marquee className='border-y-teal-300 border-t-2 border-b-2 mb-10 md:mb-12'>
          Ethereal Autos is a premier online platform designed for automotive enthusiasts and individuals interested in buying, selling, or exploring a wide range of vehicles
        </Marquee>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10 mx-2 px-6'>
          {brands.map(brand => <BrandCard key={brand.id} brands={brand}></BrandCard>)}
        </div>
      </div>

      <div>
        <ChooseUs></ChooseUs>
        <Service></Service>
      </div>
    </div>
  );
};

export default Home;
