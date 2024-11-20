import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth"
import auth from '../../firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser)setUser(currentUser);
      setLoading(false); 
    });

      return () => unsubscribe();
    }, []);

    const googleProvider = new GoogleAuthProvider();

    const createWithEmail = async (email, password, displayName, photoURL) => {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
            await updateProfile(userCredential.user, {
              displayName: displayName,
              photoURL: photoURL,
            });

        return userCredential
    }

    const createWithGoogle = async () => {
        googleProvider.setCustomParameters({
            prompt: "select_account",
          });
    
          const result = await signInWithPopup(auth, googleProvider);
        return result
    }

    const signInWithEmail = (email, password) => {
        return  signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        createWithEmail,
        createWithGoogle,
        signInWithEmail,
        logout
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>;
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default AuthProvider;