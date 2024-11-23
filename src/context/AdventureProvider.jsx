import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AdventureContext = createContext();

const AdventureProvider = ({ children }) => {
    const [adventure, setAdventure] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("adventures.json"); 
                const result = await response.json();
                setAdventure(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    if(!adventure) return <>Loading...</>

    return (
        <AdventureContext.Provider value={{ adventure }}>
            {children}
        </AdventureContext.Provider>
    );
};

AdventureProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default AdventureProvider;
