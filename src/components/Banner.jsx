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
    // const images = [
    //   `${adventure[0]['image']}`,
    //   `${adventure[3]['image']}`,
    //   `${adventure[6]['image']}`,
    // ];
    
  
    
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation 
        pagination={{ clickable: true }} 
        autoplay={{ delay: 3000 }} 
        loop 
        className="mySwiper"
      >
        {adventure.map((item, index) => (
            (index == 0 || index == 3 || index == 6) &&
          <SwiperSlide key={index}>
            <img src={item.image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  
  export default Banner;
  