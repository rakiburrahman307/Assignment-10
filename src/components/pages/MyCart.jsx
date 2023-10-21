import { useLoaderData } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { IoBagRemove } from "react-icons/io5";
import { AuthContext } from "../AuthProvidar/AuthProvider";

const MyCart = () => {
    const allCartData = useLoaderData();
    const [cartData, setCartData] = useState(allCartData);
    const { user } = useContext(AuthContext);
    const userEmail = user.email;

    useEffect(() => {
        const currentUser = allCartData.filter(cartData => cartData.userEmail === userEmail);
        setCartData(currentUser);
    }, [allCartData, userEmail]);

    const handelRemove = id => {
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
                fetch(`https://assignment-10-server-gamma-green.vercel.app/myCart/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainingProduct = cartData.filter(cartData => cartData._id !== id);
                            setCartData(remainingProduct);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <h2 className="text-2xl text-black font-bold text-center my-6" data-aos="fade-right">My<span className="text-green-400">Cart</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 mb-12">
                {cartData.map((cart) => (
                    <div key={cart._id} className="card w-auto bg-base-100 shadow-xl" data-aos="fade-left">
                        <figure className="px-10 pt-10">
                            <img src={cart.imageUrl} alt={cart.name} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">Name: {cart.name}</h2>
                            <h3 className="text-black text-xl font-semibold">Brand: {cart.brand}</h3>
                            <h3 className="text-black text-sm font-semibold">Price: ${cart.price}</h3>
                            <p className="text-justify">
                                <span className="font-bold">Description:</span>{" "}
                                {cart.description.length > 30 ? `${cart.description.substring(0, 100)}...` : cart.description}
                            </p>
                            <div className="card-actions">
                                <button onClick={() => handelRemove(cart._id)} className="btn btn-error btn-outline">Remove Item <IoBagRemove className='text-xl'></IoBagRemove></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCart;
