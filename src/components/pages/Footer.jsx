import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Keep in Touch</h2>
        <IoCarSport className="text-4xl mx-auto"></IoCarSport>
        <h3 className="text-xl font-bold mb-6">Ethereal Autos</h3>
        <p className="mb-6">Stay connected with Ethereal Autos for the latest updates and news.</p>

        <div className="flex items-center justify-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 border-white px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button className="bg-white text-blue-900 px-6 py-2 rounded-r-md hover:bg-gray-200 transition duration-300 focus:outline-none focus:ring focus:border-blue-300">
            Subscribe
          </button>
        </div>

        <p className="mt-4">Follow us on social media:</p>
        <div className="flex items-center justify-center mt-2 space-x-4 mb-6">
          <FaFacebook></FaFacebook>
          <FaTwitch></FaTwitch>
          <FaInstagram></FaInstagram>
          <FaTwitter></FaTwitter>
        </div>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;