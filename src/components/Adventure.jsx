import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Adventure = ({ item }) => {
    const { id, title, image, ecoFriendlyFeatures } = item
    return (
        <div>
            <p>{ title }</p>
            <img src={image} alt="img" />
            <ul>
                {
                    ecoFriendlyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))
                }
            </ul>
            <Link to={`/adventure-details/${id}`}>Explore More...</Link> 
        </div>
    );
};

Adventure.propTypes = {
    item: PropTypes.object,
}

export default Adventure;