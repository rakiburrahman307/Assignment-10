import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
    const [selectedRating, setRating] = useState(0);
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const imageUrl = form.imageUrl.value;
        const rating = selectedRating;
        const description = form.description.value;
        const productDetails = { name, brand, price, imageUrl, description, rating };
        console.log(productDetails);

        fetch('https://assignment-10-server-3ce1gju8r-rakiburrahman307.vercel.app/allProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        width:'auto',
                        icon: 'success',
                        title: 'New product added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
                form.reset();
            })

    }
    const handleRatingChange = e => {
        e.preventDefault();
        const selectedRating = e.target.value;
        setRating(selectedRating);
    }
    return (
        <div data-aos="fade-left">
            <form onSubmit={handleAddProduct}>
                <h2 className="text-2xl text-black font-bold text-center my-6">Fill Product <span className="text-green-400">Information</span></h2>

                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <label className="label">
                        <span className="label-text">Name?</span>
                    </label>
                    <input type="text" placeholder="Enter Name Here" name="name" className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <label className="label">
                        <span className="label-text">Brand Name?</span>
                    </label>
                    <input type="text" placeholder="Enter Brand Name Here" name="brand" className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <label className="label">
                        <span className="label-text">Price?</span>
                    </label>
                    <input type="text" placeholder="Enter Price Here" name="price" className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs mx-auto mb-4">
                    <label className="label">
                        <span className="label-text">Image Url?</span>
                    </label>
                    <input type="text" placeholder="Enter Image Url Here" name="imageUrl" className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Short Description?</span>
                    </label>
                    <input type="text" placeholder="Enter Description Here" name="description" className="input input-bordered w-full max-w-xs" required />
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
                    <input type="submit" value='Add Product' className="btn btn-info text-white" />
                </div>

            </form>
        </div>
    );
};

export default AddProduct;