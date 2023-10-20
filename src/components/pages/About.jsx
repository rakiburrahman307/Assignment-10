
const About = () => {
    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-700" data-aos="fade-left">About <span className="text-green-600 font-bold">Ethereal Autos</span></h2>

            <div className="flex flex-col md:flex-row items-center">
                <img
                    className="rounded-lg mb-6 md:mr-8 w-full md:w-1/2"
                    data-aos="fade-left"
                    src="https://i.ibb.co/HXmFSt6/1920x1200-Rolls-Royce-200-EX-LOGO-desktop-PC-and-Mac-wallpaper.jpg"
                    alt="Ethereal Autos Showroom"
                />

                <div className="md:w-1/2" data-aos="fade-right">
                    <p className="text-lg text-gray-700 mb-4">
                        Ethereal Autos is your premier destination for high-quality and stylish cars. We are dedicated to providing a
                        seamless and enjoyable car-buying experience for our customers.
                    </p>

                    <p className="text-lg text-gray-700 mb-4">
                        At Ethereal Autos, we believe in transparency and honesty. Our diverse selection includes sleek sedans,
                        powerful SUVs, and sporty convertibles  ensuring theres a perfect match for every style and need.
                    </p>

                    <p className="text-lg text-gray-700 mb-4">
                        We prioritize customer satisfaction and ensure that every car in our inventory undergoes rigorous quality
                        checks. Our goal is to make your car-buying journey enjoyable, stress-free, and memorable.
                    </p>
                </div>
            </div>

            <div className="mt-12">
                <h3 className="text-3xl font-bold mb-6 text-blue-700">Our Mission</h3>

                <p className="text-lg text-gray-700 mb-4">
                    Our mission at Ethereal Autos is to redefine the car-buying experience. We aim to provide exceptional customer
                    service, a wide range of high-quality vehicles, and a commitment to integrity and transparency.
                </p>
            </div>

            <div className="mt-12">
                <h3 className="text-3xl font-bold mb-6 text-blue-700">Contact Us</h3>

                <p className="text-lg text-gray-700 mb-4">
                    Have questions or want to learn more about Ethereal Autos? Feel free to reach out to us through our{' '}
                    <a href="/contact" className="text-blue-500 underline hover:text-blue-700">
                        contact page
                    </a>{' '}
                    or visit our showroom. We look forward to assisting you on your journey to finding the perfect car.
                </p>
            </div>
        </div>
    );
};

export default About;
