import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,sendPasswordResetEmail,updateProfile} from "firebase/auth";
import initializeAuthentication from '../FireBase/FireBase.init';

initializeAuthentication()

/* all provider */
const googleProvider= new GoogleAuthProvider();

const auth = getAuth();

const useFireBase = () => {

const [user,setUser]=useState({});
const [name,setName]=useState({});
const [error,setError]=useState('');
const [email, setEmail]=useState('');
const [password, setPassowrd]=useState('');
const[isLogin,setIsLogin]=useState(false)
const [loading, setLoading] = useState(true)


const signInWithGoogle=()=>{
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
   .finally(() => { setLoading(false) });
}


const handleEmail=e=>{
    setEmail(e.target.value)
}



const handlePassowrd=e=>{
    setPassowrd(e.target.value)
}



const toggleLogin=e=>{
    setIsLogin(e.target.checked);
}



const resgister=e=>{
    e.preventDefault();
    if(password.length<8){
        setError(' Password should be at least 8 characters')
        return;
    }



if(isLogin){
    processLogin(email,password)
}
else{
    registerNewUser(email,password)
}
}


const processLogin= (email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        setUser(result.user)
        console.log(result.user);
        setError('')
    })
    .catch(error=>{
        setError("")
    })
}


const registerNewUser=(email, password)=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        setUser(result.user)
        console.log(result.user);
        setError('')
        emailVerify();
        setUserName();
    })
    .catch(error=>{
        setError('This email already exit')
    })
}
const emailVerify=()=>{
    sendEmailVerification(auth.currentUser)
    .then(result=>{
        console.log(result);
    })
}
const handleResetPassword=()=>{
    sendPasswordResetEmail(auth, email)
    .then(result=>{
        console.log(result);
        setError('')
    })
    .catch(error=>{
        setError('')
    })
}

const handleNameChange=e=>{
 setName(e.target.value)
}

const setUserName=()=>{
    updateProfile(auth.currentUser, {displayName:name})
    .then(result=>{

    })
}
const logOut=()=>{
 signOut(auth)
 .then(()=>{
    setUser({})
 })
 .finally(() => setLoading(false));
}

useEffect(()=>{
    setLoading(true)
    onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)
        }

    });
    
},[])
    return{
        user,
        error,
        setUser,
        setError,
        signInWithGoogle,
        logOut,
        resgister,
        handleEmail,
        handlePassowrd,
        toggleLogin,
        isLogin,
        loading,
        handleResetPassword,
        handleNameChange
    }

};

export default useFireBase;