import { IoMdDoneAll } from "react-icons/io";

const ChooseUs = () => {
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
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8"data-aos="fade-left">Why Choose <span className="text-green-400">Ethereal Autos?</span></h2>
        <p className="text-lg text-gray-700 mb-8" data-aos="fade-right">
          At Ethereal Autos, we are committed to providing an exceptional automotive experience. Here are some reasons to choose us.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <li key={index} className="mb-4 flex items-center" data-aos="fade-right">
              <IoMdDoneAll className=" text-green-600 font-semibold mr-2"></IoMdDoneAll>
              <span>{reason}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg text-gray-700 mt-8"data-aos="fade-left">
          Choose Ethereal Autos for a superior automotive journey. Visit us at our convenient location and discover the difference.
        </p>
      </div>
    </section>
  );
};

export default ChooseUs;
