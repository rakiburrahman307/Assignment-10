import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../AuthProvidar/AuthProvider";


const Registration = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()


    const handleRegistration = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        if (/^\w{1,5}$/.test(password)) {
            console.log("Password must be 6 characters");
        } else if (/^[^A-Z]*$/.test(password)) {
            console.log("Password must one capital letter")
        } else if (/^[^\W_]*$/.test(password)) {
            console.log('Must have a special character')
        } else {
            createUser(email, password, name)
                .then(result => {
                    // update profile name :
                    updateProfile(result.user, {
                        displayName: name,
                    })
                        .then(() => {
                            form.reset();
                            console.log("Create user successfully")
                            navigate("/")

                        })
                        .catch(err => {
                            console.log(err.massage)
                        })
                })
                .catch(err => {
                    console.log(err.massage);
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
                        <button className="btn btn-primary">Register</button>
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