import { useState ,useEffect} from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut, GithubAuthProvider }
from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase =   () =>{
    const [user, setUser] =  useState({});

    const auth = getAuth();
    const googleProvider = new  GoogleAuthProvider();
    const githubProbider = new GithubAuthProvider();

    const singInUsingGoogle = () =>{
        return signInWithPopup(auth,  googleProvider);
    }
    const singInUsingGithub = () =>{
        return signInWithPopup(auth,  githubProbider);
    }

    const logOut =() => {
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    }
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
             } 
          });
    }, []); 
    
    return {
        user, 
        singInUsingGoogle,
        logOut,
        singInUsingGithub
    }
}  
export default useFirebase; 