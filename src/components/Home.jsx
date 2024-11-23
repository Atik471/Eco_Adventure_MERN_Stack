import About from "./About";
import Adventures from "./Adventures";
import Banner from "./Banner";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Adventures></Adventures>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;