
const About = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-12 lg:px-24" id="about">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              <div className="flex flex-col gap-6" data-aos="fade-right" data-aos-duration="1500">
                <h4 className="text-primary font-semibold text-lg uppercase tracking-widest">
                  About Us
                </h4>
                <h2 className="text-4xl font-bold text-gray-800 leading-snug">
                  Helping adventurers{" "}
                  <span className="text-primary">connect with nature</span> through eco-tourism.
                </h2>
                <p className="text-gray-600 text-lg">
                  At EcoAdventure, we aim to provide meaningful and sustainable travel
                  experiences. From breathtaking hikes to serene kayaking trips, we
                  offer an opportunity to rediscover the world while protecting it for
                  future generations.
                </p>
                <p className="text-gray-600 text-lg">
                  Join us to make memories and promote eco-conscious tourism. Together,
                  we can preserve the environment and create adventures that matter.
                </p>
                <button className="bg-primary text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#588423] transition-all duration-300">
                  Learn More
                </button>
              </div>

              <div className="relative" data-aos="flip-right" data-aos-duration="1500">
                <img
                  src="/public/about-us.jpg"
                  alt="Eco Adventure"
                  className="rounded-lg shadow-lg border-4 border-primary p-4"
                />
              </div>
            </div>
        </section>
    );
};

export default About;