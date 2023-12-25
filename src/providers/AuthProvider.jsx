import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

export const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in the current state');
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unSubscribe();
        }
    }, []);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    };

    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithRedirect(auth, provider);
    }


    const authInfo = {
        loading,
        createUser,
        signIn,
        logOut,
        user,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
}

export default AuthProvider;