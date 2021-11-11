import initializeAuthentication from "../Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Register
    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser = {email, displayName: name}
            setUser(newUser);
            updateProfile(auth.currentUser, {
                displayName: name,
              }).then(() => {
              }).catch((error) => { 
              });
            setUser(user);
            history.replace('/');
            setError('');
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          })
          .finally( ()=> setIsLoading(false))
    }

    //Login
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setUser(user);
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setError('');
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
        .then(()=> setIsLoading(false));
    }

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            setError(error.message)
          })
          .finally( ()=> setIsLoading(false));
    }
    //Observer
    useEffect(()=> {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({});
            }
            setIsLoading(false)
        });
        return ()=> unsubscribed;
    }, [])
    return {
        user,
        registerUser,
        loginUser,
        error,
        isLoading,
        logout,
    }
}

export default useFirebase;