import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Adventure = ({ item }) => {
    const [isMdScreen, setIsMdScreen] = useState(false);
    const { id, title, image, ecoFriendlyFeatures } = item
    useEffect(() => {
        const checkScreenSize = () => {
          setIsMdScreen(window.innerWidth >= 768); 
        };
    
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize); 
    
        return () => {
          window.removeEventListener('resize', checkScreenSize);
        };
      }, []);

    return (
        <div className="rounded-xl flex flex-col p-2 " data-aos="zoom-in" data-aos-duration="1000" {...(!isMdScreen && { "data-aos-delay": `${id * 100}` })}>
            <div className="w-full h-[30vh] rounded-lg" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            </div>
            <p className="text-xl pl-4 mt-6 mb-3 font-semibold">{ title }</p>
            <ul className="mb-4">
                {
                    ecoFriendlyFeatures.map((feature, index) => (
                        <li key={index} className="ml-8 list-disc">{feature}</li>
                    ))
                }
            </ul>
            <button className="bg-primary px-4 py-2 mr-2 text-white font-semibold mb-[2rem] self-end">
                <Link to={`/adventure-details/${id}`}>Explore More...</Link> 
            </button>
        </div>
    );
};

Adventure.propTypes = {
    item: PropTypes.object,
}

export default Adventure;