import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto text-center">

        <IoCarSport className="text-4xl mx-auto" data-aos="fade-left"></IoCarSport>
        <h3 className="text-2xl font-bold mb-6" data-aos="fade-right">Ethereal Autos</h3>
        <p className="mb-6" data-aos="fade-left">Stay connected with Ethereal Autos for the latest updates and news.</p>

        <div className="flex items-center justify-center space-x-4" data-aos="fade-right">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 border-white px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="bg-white text-blue-900 px-6 py-2 rounded-r-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
            Subscribe
          </button>
        </div>

        <p className="mt-4" data-aos="fade-left">Follow us on social media:</p>
        <div className="flex items-center justify-center mt-2 space-x-4 mb-6" data-aos="fade-right">
          <FaFacebook></FaFacebook>
          <FaTwitch></FaTwitch>
          <FaInstagram></FaInstagram>
          <FaTwitter></FaTwitter>
        </div>
        <p data-aos="fade-left">Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;