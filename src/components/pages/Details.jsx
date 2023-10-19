import { useLoaderData } from "react-router-dom";
import DetailsView from "./DetailsView";


const Details = () => {
    const carData = useLoaderData();

   
    return (
        <div className="my-20">
            <h2 className="text-4xl font-bold text-center mb-6 mx-2 md:mx-10">Product <span className="text-green-400">Details</span></h2>
            {carData.map(carData =><DetailsView key={carData._id} carData={carData}></DetailsView>)}
    </div>
    );
};

export default Details;