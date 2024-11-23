import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 px-[5%]">
            <div className="mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="w-full md:w-1/3">
                  <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-primary transition">Home</a></li>
                    <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
                    <li><a href="#services" className="hover:text-primary transition">Services</a></li>
                    <li><a href="#" className="hover:text-primary transition">Contact Us</a></li>
                  </ul>
                </div>

                <div className="w-full md:w-1/3">
                  <h4 className="text-xl font-semibold text-white mb-4">About Us</h4>
                  <p className="text-sm">
                  We are passionate about connecting people with nature through unforgettable eco-adventure experiences. 
                  </p>
                </div>

                <div className="w-full md:w-1/3 md:text-right">
                  <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
                  <div className="flex space-x-4 md:justify-end">
                    <a href="https://www.facebook.com/atikur.rahman.424121" target="_blank" className="text-gray-300 hover:text-blue-500 transition">
                      <FaFacebook></FaFacebook>
                    </a>
                    <a href="https://twitter.com" target="_blank" className="text-gray-300 hover:text-blue-400 transition">
                      <FaTwitter></FaTwitter>
                    </a>
                    <a href="https://instagram.com" target="_blank" className="text-gray-300 hover:text-pink-500 transition">
                      <FaInstagram></FaInstagram>
                    </a>
                    <a href="edin.com/in/atikur-rahman-9680262b4/" target="_blank" className="text-gray-300 hover:text-blue-600 transition">
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