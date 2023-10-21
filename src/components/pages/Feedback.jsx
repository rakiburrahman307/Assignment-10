import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
    const feedbackData = useLoaderData();
    const [feedback, setFeedback] = useState(feedbackData);
    const handleDelateMessage = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-10-server-gamma-green.vercel.app/feedback/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Message has been deleted.',
                                'success'

                            )
                            setFeedback(feedback.filter(item => item._id !== id));
                        }
                    })

            }
        });

    }
    return (
        <div>
            <h2 className="text-black text-center font-bold text-4xl my-10" data-aos="fade-left">
                User <span className="text-green-500">Feedbacks</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mb-12">
                {feedback.map((feed) => (
                    <div data-aos="fade-right" key={feed._id} className="card card-compact w-auto bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold text-lg">{feed.name}</h2>
                            <h3 className="text-black text-sm font-semibold">{feed.email}</h3>
                            <p className="whitespace-normal">
                                {feed.message.length > 30 ? `${feed.message.substring(0, 60)}...` : feed.message}
                            </p>
                            <div className="card-actions justify-between">

                                <button onClick={() => handleDelateMessage(feed._id)} className="btn btn-outline btn-error">
                                    Delate Massage
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feedback;
