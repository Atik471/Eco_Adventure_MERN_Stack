import { useContext } from "react";
import { AdventureContext } from "../context/AdventureProvider";
import Adventure from "./Adventure";

const Adventures = () => {
    const { adventure } = useContext(AdventureContext)

    return (
        <div className="grid grid-cols-3">
            {adventure != [] ? (
                adventure.map((item, index) => (
                    <Adventure key={index} item={item} />
                    //console.log(item)
                    ))
            ) : (
                    <p>Loading adventures...</p>
            )}

        </div>
    );
};

export default Adventures;