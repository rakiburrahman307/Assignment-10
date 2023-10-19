
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const BrandCarCard = ({ car }) => {
    const {_id, name, brand, price, imageUrl, description, rating } = car;

    
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
        <div className="card card-compact w-auto bg-base-100 shadow-xl">
            <figure><img className='h-48' src={imageUrl} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">Name: {name}</h2>
                <h3 className="text-black text-xl font-semibold">Brand: {brand}</h3>
                <h3 className="text-black text-sm font-semibold">Price: ${price}</h3>
                <p>{description.length > 30 ? `${description.substring(0, 60)}...` : description}</p>
                <div className="rating mb-6">
                    {renderStars()}
                </div>

                <div className="card-actions justify-between">
                    <Link to={`/details/${_id}`}><button className="btn btn-outline btn-info">
                        Details
                    </button></Link>
                    <button className="btn btn-outline btn-warning">
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

BrandCarCard.propTypes = {
    car: PropTypes.object
};

export default BrandCarCard;