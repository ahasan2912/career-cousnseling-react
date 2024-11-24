import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useRef, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import toast from 'react-hot-toast';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLoginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const handleLoginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (updateData)=>{
        return updateProfile(auth.currentUser, updateData);
    }

    const handleLogOut = () => {
        toast.success("You have successfully Logout!")
        return signOut(auth);
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            }
            else {
                setUser(null);
            }
            setLoading(false);
        })

        return () => {
            unsubcribe();
        }
    }, [])
    const authInfo = {
        user,
        setUser,
        handleRegister,
        handleLoginWithEmail,
        handleLoginWithGoogle,
        handleLogOut,
        updateUserProfile,
        loading, 
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;