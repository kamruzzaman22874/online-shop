import { createContext, useState } from 'react';
import {
    getAuth,
    onAuthStateChanged,
    updateProfile,
    signOut
} from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const logOut = () => {
        setLoading(true);
        signOut(auth)
    }

    const userUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user, loading, logOut, userUpdateProfile, cart, setCart
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;