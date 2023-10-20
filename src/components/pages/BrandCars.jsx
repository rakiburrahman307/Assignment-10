
import { useLoaderData, useParams } from "react-router-dom";
import BrandCarCard from "./BrandCarCard";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const BrandCars = () => {
    const allProducts = useLoaderData();
    const { brandName } = useParams();
    const filteredProducts = allProducts.filter(product => product.brand.toLowerCase() === brandName.toLocaleLowerCase());


    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div>
            <div className='mb-10'>
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
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://i.ibb.co/R9Sc45n/matthew-sichkaruk-QUHRL5-Z-1e-A-unsplash.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/jg5XW8K/akram-huseyn-l-LOJ-DA54h0-unsplash.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/S62YGQ9/velito-xd-I8d-Bx1-SA8-unsplash.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/WvLNjVt/pierre-gui-3-IR3fozcc-Y8-unsplash.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/TY07rGb/rodan-can-6cq-JPe-TIuls-unsplash.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/bjhC6Qm/jakob-rosen-W7-HOXq-Ek-JUw-unsplash.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/LJNMsp6/tesson-thaliath-1-Ms-GQCOe-FRk-unsplash.jpg" /></SwiperSlide>

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
            <div>
                <h2 className="text-center text-3xl font-bold">All <span className="text-green-500">Cars</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 mx-2 px-6">
                    {
                        filteredProducts.map(car => <BrandCarCard key={car._id} car={car}></BrandCarCard>)
                    }
                </div>
            </div>
        </div>
    );
};

BrandCars.propTypes = {

};

export default BrandCars;