import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../routes/AuthProvider';
import googleLogo from '../assets/google-icon.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const Register = () => {
    const { handleRegister, handleLoginWithGoogle, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegisterBtn = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");
        if (password.length < 6) {
            setError('Password should be at least 6 characters or longer');
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must contain at least one lowercase and one Uppercase and more 6 charecter");
            return;
        }
        handleRegister(email, password)
            .then((result) => {
                setUser(result.user);
                updateUserProfile({displayName:name, photoURL:photo})
                toast.success("You have successfully registered");
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                setError(err.message);
            })
    };

    const handleLoginWithGoogleBtn = ()=> {
        handleLoginWithGoogle()
        .then(res=>{
            toast.success("You have successfully registered");
            navigate(location?.state ? location.state : "/");
        })
    }
    return (
        <div className='flex flex-col items-center justify-center my-14 px-5'>
            <Helmet>
                <title>Register | Career Counseling </title>
            </Helmet>
            <div className='card bg-base-200 w-full max-w-md shrink-0'>
                <form onSubmit={handleRegisterBtn} className="card-body">
                    <h1 className='text-3xl font-semibold text-center'>Register your account</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                        <button type='button' onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute top-12 right-4'>
                            {
                                showPassword ? <FaEye /> : <FaEyeSlash />
                            }
                        </button>
                    </div>
                    <div className="form-control mt-6">
                        <button type='sumit' className="btn btn-primary text-white">Register</button>
                    </div>
                    {
                        error && (<p className='text-red-500 font-semibold text-center text-sm'>{error}</p>)
                    }
                    <div onClick={handleLoginWithGoogleBtn} className='flex items-center justify-center py-2 btn btn-outline btn-primary mt-2 text-gray-700 hover:text-white'>
                        <img className='w-6' src={googleLogo} alt="" />
                        <span>Register with Google</span>
                    </div>
                    <Link to='/login' className='font-semibold text-red-500 text-center text-sm'>Allready Have an account ? Login</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;