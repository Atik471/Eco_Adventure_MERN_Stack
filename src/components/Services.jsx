

const Services = () => {
    const services = [
        {
          id: 1,
          title: "Nature Trails",
          description:
            "Explore serene nature trails that lead you through lush forests, picturesque landscapes, and breathtaking viewpoints. Perfect for adventure seekers and nature lovers alike.",
        },
        {
          id: 2,
          title: "Wildlife Encounters",
          description:
            "Experience the thrill of encountering wildlife in their natural habitat. Our guided tours ensure you get close to the action while respecting the environment.",
        },
        {
          id: 3,
          title: "Eco-Friendly Camping",
          description:
            "Immerse yourself in the great outdoors with eco-friendly camping experiences. Enjoy sustainable accommodations while connecting with nature like never before.",
        },
      ];
      
  
    return (
      <section className="bg-primary py-16 my-[4rem] mb-[8rem] px-[5%]" id="services">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6 px-4">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${service.bgColor} ${service.textColor} hover:scale-105 bg-yellow-200`}
              >
                <h3 className="text-3xl font-bold mb-4">{service.id < 10 ? `0${service.id}` : service.id}</h3>
                <h4 className="text-2xl font-semibold mb-3">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  