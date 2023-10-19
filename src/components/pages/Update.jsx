import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const [selectedRating, setRating] = useState(0);
    const carData = useLoaderData();
    const {_id, name, brand, price, imageUrl, description} = carData;
    const handleAddProduct = e =>{
       e.preventDefault();
       const form = e.target;
       const name = form.name.value; 
       const brand = form.brand.value; 
       const price = form.price.value; 
       const imageUrl = form.imageUrl.value; 
       const rating = selectedRating;
       const description = form.description.value; 
       const productDetails ={name, brand, price, imageUrl, description,rating}; 

       fetch(`http://localhost:5000/allProducts/${_id}`,{
         method:'PUT',
         headers:{
           'content-Type':'application/json'
         },
         body:JSON.stringify(productDetails)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data)
        form.reset();
       })

    }
    const handleRatingChange = e =>{
        e.preventDefault();
        const selectedRating = e.target.value;
        setRating(selectedRating);
    }
    return (
        <div>
             <form onSubmit={handleAddProduct}>
                <h2 className="text-2xl text-black font-bold text-center my-6">Update Product <span className="text-green-400">Information</span></h2>

                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <label className="label">
                        <span className="label-text">Name?</span>
                    </label>
                    <input type="text" placeholder="Enter Name Here" defaultValue={name} name="name" className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <label className="label">
                        <span className="label-text">Brand Name?</span>
                    </label>
                    <input type="text" defaultValue={brand} placeholder="Enter Brand Name Here" name="brand" className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <label className="label">
                        <span className="label-text">Price?</span>
                    </label>
                    <input type="text" defaultValue={price} placeholder="Enter Price Here" name="price" className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <label className="label">
                        <span className="label-text">Image Url?</span>
                    </label>
                    <input type="text" defaultValue={imageUrl} placeholder="Enter Image Url Here" name="imageUrl" className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <label className="label">
                        <span className="label-text">Short Description?</span>
                    </label>
                    <input type="text" defaultValue={description} placeholder="Enter Description Here" name="description" className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" value="1" onChange={handleRatingChange} />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" value="2" onChange={handleRatingChange} />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" value="3" onChange={handleRatingChange} />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" value="4" onChange={handleRatingChange} />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" value="5" onChange={handleRatingChange} />
                    </div>
                </div>
                <div className="form-control w-full max-w-xs mx-auto mb-8">
                    <input type="submit" value='Update Product' className="btn btn-info text-white"/>
                </div>

            </form>
        </div>
    );
};

export default Update;