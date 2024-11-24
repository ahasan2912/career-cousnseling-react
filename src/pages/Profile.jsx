import React, { useContext } from 'react';
import { AuthContext } from '../routes/AuthProvider';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const Profile = () => {
    const { user, updateUserProfile, setUser} = useContext(AuthContext);
    const handleSubmitBtn = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateUserProfile({displayName: name,photoURL: photo})
        .then(() => {
            setUser((prevUser) => ({
                ...prevUser,
                displayName: name,
                photoURL: photo
            }));
            toast.success("You have successfully registered!");
        })
        .catch((error) => {
            toast.error("Profile update failed!");
        });
    }
    return (
        <div className='max-w-xl mx-auto mt-10 px-4'>
            <Helmet>
                <title>MyProfile | Career Counseling </title>
            </Helmet>
            <div className=' border rounded-xl p-4 flex flex-col items-center justify-center gap-2'>
                <h1 className='text-2xl font-semibold'>User Name: {user.displayName}</h1>
                <p className='font-semibold'>User Email: {user.email}</p>
                <div className='flex items-center gap-3'>
                    <p className='text-2xl font-semibold'>User Photo:</p>
                    <img className='rounded-full w-16 h-16 object-cover' src={user.photoURL} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center my-10'>
                <div className="card bg-base-200 w-full  shadow-2xl">
                    <form onSubmit={handleSubmitBtn} className="card-body">
                        <div className="form-control">
                        <h1 className='text-3xl font-semibold text-center'>If you want to update profile.</h1>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter your photo link" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary text-white">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;