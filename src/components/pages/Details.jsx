import { useLoaderData } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import Swal from "sweetalert2";



const Details = () => {
    const carData = useLoaderData();

    const { name, brand, price, imageUrl, description, rating } = carData;
    const addCart = { name, brand, price, imageUrl, description, rating };


    const handleAddToCart = () => {
        fetch('https://assignment-10-server-3ce1gju8r-rakiburrahman307.vercel.app/myCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        width:'auto',
                        title: 'Product Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const renderStars = () => {
        const maxRating = 5;
        const roundedRating = Math.round(rating);

        return Array.from({ length: maxRating }, (_, index) => (
            <input
                key={index}
                type="radio"
                name={`rating-${name}`}
                className={`mask mask-star-2 bg-orange-400 ${index < roundedRating ? 'checked' : ''}`}
                readOnly
            />
        ));
    };


    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold text-center mb-6 mx-2 md:mx-10">Product <span className="text-green-400">Details</span></h2>
            <div className="card lg:card-side w-full px-8 bg-base-100 shadow-xl">
                <figure><img src={imageUrl} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Name: {name}</h2>
                    <h3 className="text-black text-xl font-semibold">Brand: {brand}</h3>
                    <h3 className="text-black text-sm font-semibold">Price: ${price}</h3>
                    <p className="text-justify"><span className="font-bold">Description:</span> {description}</p>
                    <div className="rating mb-6 m-auto">
                        <p className="text-black">Rating: {renderStars()}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={handleAddToCart} className="btn btn-outline btn-neutral">Add To card <FaCartShopping className="text-2xl"></FaCartShopping></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;