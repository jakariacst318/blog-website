
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,  getAuth,  GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";



export const AuthContext = createContext();
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    // google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        githubLogin,
        logOut,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;