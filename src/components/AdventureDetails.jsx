import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdventureDetails = () => {
    const id = useParams()
    const [details, setDetails] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/adventureDetails/adventure-${id.id}.json`); 
                const result = await response.json();
                setDetails(result)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    console.log(details)
    return (
        <div>
            adventure details
            
        </div>
    );
};

export default AdventureDetails;