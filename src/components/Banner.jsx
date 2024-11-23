import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useContext } from "react";
import { AdventureContext } from "../context/AdventureProvider";

function Banner() {
    const { adventure } = useContext(AdventureContext)
    if(!adventure) return <>Loading...</>
    console.log(adventure)
    
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation 
        pagination={{ clickable: true }} 
        autoplay={{ delay: 3000 }} 
        loop 
        className="mySwiper max-w-[90%] mx-auto h-[30rem] my-8 flex justify-center items-center"
        
      >
        <style>{`
                  .swiper-pagination-bullet {
                    background-color: #4caf50;
                  }
                  .swiper-pagination-bullet-active {
                    background-color: #6ca12b;
                  }
                  .swiper-button-next,
                  .swiper-button-prev {
                  transition: all 0.3s;
                    color: white;
                  }
                  .swiper-button-next:hover,
                  .swiper-button-prev:hover {
                    color: #4caf50;
                  }
        `}</style>
        {adventure.map((item, index) => (
            (index == 0 || index == 3 || index == 8) &&
          <SwiperSlide key={index}>
            <img src={item.image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  
  export default Banner;
  