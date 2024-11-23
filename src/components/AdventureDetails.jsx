import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdventureDetails = () => {
    const id = useParams()
    const [details, setDetails] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTalkWithExpertClick = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    
    if (currentHour >= 10 && currentHour < 20) {
      window.open('https://meet.google.com/new', '_blank');
    } else {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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

    if (!details) {
        return (
            <div className="text-center py-10">
                <p className="text-lg font-semibold text-gray-600">Loading adventure details...</p>
            </div>
        );
    }

    return (
        <div className="px-auto px-[5%] py-[3rem] ">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            <div className="md:w-[70%] md:mb-[3rem]">
              <img
                src={details.image}
                alt={details.title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full lg:w-3/5">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{details.title}</h1>
              <p className="md:text-lg text-gray-600 mb-6">{details.shortDescription}</p>
              <p className="text-sm font-medium text-white bg-primary rounded-[1rem] px-2 inline-block mb-2">
                {details.bookingAvailability}
              </p>
              <p className="text-lg mt-6 mb-3 font-semibold text-gray-800">
                Cost: ${details.cost}
              </p>
              <p className="text-md text-gray-600">Location: {details.location}</p>
              <p className="text-md text-gray-600">Duration: {details.duration}</p>
              <p className="text-md text-gray-600">Adventure Level: {details.adventureLevel}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-5">
            <div className="mt-8 shadow-md rounded-lg p-6 bg-yellow-200 border-primary/20 border-2">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">What’s Included</h2>
              <ul className="pl-2 text-gray-600 space-y-2">
                {details.includedItems.map((item, index) => (
                  <li key={index} className="text-lg">
                    <span className="text-green-600 font-medium">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 shadow-md rounded-lg p-6 bg-yellow-200 border-primary/20 border-2">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Eco-Friendly Features</h2>
              <ul className="pl-2 text-gray-600 space-y-2">
                {details.ecoFriendlyFeatures.map((feature, index) => (
                  <li key={index} className="text-lg">
                    <span className="text-primary font-medium">🌿</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 shadow-md rounded-lg p-6 bg-yellow-200 border-primary/20 border-2">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Special Instructions</h2>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                {details.specialInstructions.map((instruction, index) => (
                  <li key={index} className="text-lg">
                    <span className="text-blue-600 font-medium"></span> {instruction}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 shadow-md rounded-lg p-6 bg-yellow-200 border-primary/20 border-2">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-4">Additional Information</h2>
              <p className="text-gray-600 text-lg">
                <span className="font-semibold text-primary">Max Group Size:</span> {details.maxGroupSize}
              </p>
            </div>
          </div>
          <button
            onClick={handleTalkWithExpertClick}
            className="mx-auto shadow-xl bg-primary hover:bg-[#50771f] transition-all duration-300 font-bold text-white p-3 rounded-lg mt-16 my-8"
          >
        Talk with Expert
        </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80">
            <h2 className="text-xl font-bold mb-4">Consultation Time</h2>
            <p>Our consultation hours are from 10:00 AM to 8:00 PM.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white p-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
        </div>
    );
};

export default AdventureDetails;