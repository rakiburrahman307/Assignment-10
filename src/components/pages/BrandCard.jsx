
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brands }) => {
    const { brandName, img } = brands;


    return (
        <Link to={`/brandCars/${brandName}`}>
            <div className="card w-auto bg-base-100 shadow-xl image-full -z-10" data-aos="fade-left">
                <figure><img src={img} alt={brandName} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{brandName}</h2>
                </div>
            </div>
        </Link>
    );
};

BrandCard.propTypes = {
    brands: PropTypes.object
};

export default BrandCard;