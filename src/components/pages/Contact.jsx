import Swal from "sweetalert2";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const feedback = { name, email, message }

        fetch('https://assignment-10-server-3ce1gju8r-rakiburrahman307.vercel.app/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        width:'auto',
                        title: 'Feedback Submitted Success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }

            })

    };

    return (
        <div className="container mx-auto mt-8" data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-8 text-center text-blue-700">Contact Us</h2>

            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                    <p className="text-lg text-gray-700 mb-4">
                        Have questions or feedback? Contact us using the form below, and well get back to you as soon as possible.
                    </p>
                </div>

                <form className="md:w-1/2" onSubmit={handleSubmit} data-aos="fade-left">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                            required
                        ></textarea>
                    </div>

                    <div className="mb-6">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
