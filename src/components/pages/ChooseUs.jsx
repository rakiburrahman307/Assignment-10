import { IoMdDoneAll } from "react-icons/io";
import { AuthContext } from "../AuthProvidar/AuthProvider";
import { useContext } from "react";

const ChooseUs = () => {
    const { darkMode } = useContext(AuthContext);
    const reasons = [
        "Unmatched Quality",
        "Extensive Selection",
        "Transparent Processes",
        "Competitive Pricing",
        "Customer-Centric Approach",
        "Financing Options",
        "Expert Team",
        "Exceptional Customer Reviews",
        "Commitment to Sustainability",
        "Convenient Location",
    ];

    return (
        <section className={`${darkMode ? 'bg-black' : 'bg-gray-100'} py-16`}>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 md:mb-12" data-aos="fade-left">Why Choose <span className="text-green-400">Ethereal Autos?</span></h2>
                <p className={`text-lg ${darkMode ? 'text-white' : 'text-gray-700'} mb-8 md:mb-10`} data-aos="fade-right">
                    At Ethereal Autos, we are committed to providing an exceptional automotive experience. Here are some reasons to choose us.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                    {reasons.map((reason, index) => (
                        <li key={index} className={`mb-4 sm:mb-6 md:mb-8 lg:mb-10 flex items-center ${darkMode ? 'text-white' : 'text-gray-700'}`} data-aos="fade-right">
                            <IoMdDoneAll className=" text-green-600 font-semibold mr-2"></IoMdDoneAll>
                            <span>{reason}</span>
                        </li>
                    ))}
                </ul>

                <p className={`${darkMode ? 'text-white' : 'text-gray-700'} text-lg  mt-8 md:mt-12`} data-aos="fade-left">
                    Choose Ethereal Autos for a superior automotive journey. Visit us at our convenient location and discover the difference.
                </p>
            </div>
        </section>
    );
};

export default ChooseUs;
