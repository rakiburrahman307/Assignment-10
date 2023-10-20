import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../AuthProvidar/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();


  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get('email');
    const password = form.get('password');

    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: 'success',
          text: 'Successfully signed in',
        })
        navigate(location?.state ? location.state : '/');
      })
      .catch(() => {
        Swal.fire({
        icon: 'error',
        text: 'Failed to sign in',
      })});


  };
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(result => {
        if(result){
          Swal.fire({
            icon: 'success',
            text: 'Successfully signed in',
          })
          navigate(location?.state ?? '/');
        } 
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          text: 'Failed to sign in',
        })
      });
  }
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/zfdjLb1/leon-seibert-1-Riy-Aw-NIiew-unsplash.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="card flex-shrink-0 mt-10 w-full max-w-sm shadow-2xl bg-base-300">
        <h1 className="text-3xl font-bold text-center mt-4">Login now!</h1>
        <form onSubmit={handleLogin} className="card-body">
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
            <button className="btn btn-outline btn-neutral">Login</button>
          </div>
          <label className="label">
            <Link to="/register" className="label-text-alt link link-hover">Do not have an account? Register Now</Link>
          </label>
        </form>
        <div className="mx-auto mb-2">
        <span className="text-center font-bold">or</span>
        </div>
        <div className="mb-6 mx-auto">
          <button onClick={handleSignInWithGoogle} className="btn  btn-outline btn-accent mx-auto w-48">Sign in With<FaGoogle className="text-xl"></FaGoogle></button>
        </div>
      </div>
    </div>
  );
};

export default Login;
