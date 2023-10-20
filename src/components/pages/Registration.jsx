import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../AuthProvidar/AuthProvider";
import Swal from "sweetalert2";


const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegistration = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        if (/^\w{1,5}$/.test(password)) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Password must be 6 characters',
                showConfirmButton: false,
                timer: 1500
            })
        } else if (/^[^A-Z]*$/.test(password)) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Password must one capital letter',
                showConfirmButton: false,
                timer: 1500
            })
        } else if (/^[^\W_]*$/.test(password)) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Must have a special character',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            createUser(email, password, name)
                .then(result => {
                    // update profile name:
                    updateProfile(result.user, {
                        displayName: name,
                    })
                        .then(() => {
                            Swal.fire({
                                icon: 'success',
                                text: 'Registration Success',
                            });
                            navigate("/");

                        })
                        .catch((updateProfileError) => {
                            console.error("Update profile error:", updateProfileError);
                            Swal.fire({
                                icon: 'error',
                                text: 'Registration failed',
                            });
                        });
                })
                .catch((createUserError) => {
                    console.error("Create user error:", createUserError);
                    Swal.fire({
                        icon: 'error',
                        text: 'Registration failed',
                    });
                });



        }

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/zfdjLb1/leon-seibert-1-Riy-Aw-NIiew-unsplash.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-3xl font-bold text-center mt-4">Registration now!</h1>
                <form onSubmit={handleRegistration} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline btn-neutral">Register</button>
                    </div>
                    <label className="label">
                        <Link to="/login" className="label-text-alt link link-hover">Already have an account? Login Now</Link>
                    </label>
                </form>
            </div>
        </div>
    );
};

export default Registration;