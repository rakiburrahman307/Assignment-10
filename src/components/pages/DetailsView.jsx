import { FaCartShopping } from "react-icons/fa6";
import PropTypes from 'prop-types';

const DetailsView = ({carData}) => {
    const {_id, name, brand, price, imageUrl, description, rating } = carData;
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
    );
};

DetailsView.propTypes = {
    carData: PropTypes.object.isRequired,
};

export default DetailsView;