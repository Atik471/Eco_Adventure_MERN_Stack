import { useContext } from "react";
import { AdventureContext } from "../context/AdventureProvider";
import Adventure from "./Adventure";

const Adventures = () => {
    const { adventure } = useContext(AdventureContext)

    return (
        <>
            <h1 className="font-amatic mx-auto text-center text-5xl font-extrabold mb-5">Our Adventures</h1>
            <p className="mx-auto text-center text-primary mb-[3rem] md:text-lg md:max-w-[35%] max-w-[94%]">Explore our eco friendly adventure that offers a diverse range of tourist spots</p>
            <div className="grid md:grid-cols-3 grid-cols-1 max-w-[90%] mx-auto gap-6">
                {adventure != [] ? (
                    adventure.map((item, index) => (
                        <Adventure key={index} item={item} />
                        ))
                ) : (
                        <p>Loading adventures...</p>
                )}

            </div>
        </>
    );
};

export default Adventures;