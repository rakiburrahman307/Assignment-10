
import { useLoaderData, useParams } from "react-router-dom";
import BrandCarCard from "./BrandCarCard";

const BrandCars = () => {
    const allProducts = useLoaderData();
    const {brandName} = useParams();
    const filteredProducts = allProducts.filter(product => product.brand.toLowerCase() === brandName.toLocaleLowerCase());

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 mx-2 px-6">
            {
                filteredProducts.map(car =><BrandCarCard key={car._id} car={car}></BrandCarCard>)
            }
        </div>
    );
};

BrandCars.propTypes = {
    
};

export default BrandCars;