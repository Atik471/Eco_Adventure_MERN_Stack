import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 px-[5%] ">
            <div className="mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                

                <div className="w-full md:w-1/3">
                  <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
                    <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
                    <li><Link to="/services" className="hover:text-primary transition">Services</Link></li>
                    <li><Link to="/contact" className="hover:text-primary transition">Contact Us</Link></li>
                  </ul>
                </div>

                <div className="w-full md:w-1/3">
                  <h4 className="text-xl font-semibold text-white mb-4">About Us</h4>
                  <p className="text-sm">
                  We are passionate about connecting people with nature through unforgettable eco-adventure experiences. 
                  </p>
                </div>

                <div className="w-full md:w-1/3 text-right">
                  <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
                  <div className="flex space-x-4 justify-end">
                    <a href="https://facebook.com" target="_blank" className="text-gray-300 hover:text-blue-500 transition">
                      <FaFacebook></FaFacebook>
                    </a>
                    <a href="https://twitter.com" target="_blank" className="text-gray-300 hover:text-blue-400 transition">
                      <FaTwitter></FaTwitter>
                    </a>
                    <a href="https://instagram.com" target="_blank" className="text-gray-300 hover:text-pink-500 transition">
                      <FaInstagram></FaInstagram>
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-blue-600 transition">
                      <FaLinkedin></FaLinkedin>
                    </a>
                  </div>
                </div>

                
              </div>

              <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                <p>&copy; 2024 Eco Adventure. All rights reserved.</p>
              </div>
            </div>
        </footer>
    );
};

export default Footer;