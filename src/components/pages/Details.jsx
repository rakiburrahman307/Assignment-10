import { useLoaderData } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";



const Details = () => {
    const carData = useLoaderData();

    const {_id, name, brand, price, imageUrl, description, rating } = carData;
    console.log(name, brand, price, imageUrl);
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
        <figure><img src={imageUrl} alt={name}/></figure>
        <div className="card-body">
        <h2 className="card-title font-bold">Name: {name}</h2>
                <h3 className="text-black text-xl font-semibold">Brand: {brand}</h3>
                <h3 className="text-black text-sm font-semibold">Price: ${price}</h3>
                <p>{description}</p>
                <div className="rating mb-6 m-auto">
                   <p className="text-black">Rating: {renderStars()}</p>
                </div>
          <div className="card-actions justify-center">
            <button className="btn btn-outline btn-neutral">Add To card <FaCartShopping className="text-2xl"></FaCartShopping></button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Details;