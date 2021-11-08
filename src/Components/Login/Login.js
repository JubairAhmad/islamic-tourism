import { signInWithPopup } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
// ../Hooks/useAuth

const LogIn = () => {
    const {AllContexts}=useAuth();
   const {signInWithGoogle, setUser, setError}=AllContexts;

   const location=useLocation()
   const redirect=location?.state?.from;
   const history=useHistory()
   
    return (
        <div className='container d-flex justify-content-center'>
          <div>
          <h1 className='mt-3 mb-3'>Please Sign in With Google</h1>
           <div className='col-sm-6 col-lg-6 mx-auto  px-5 authen-btn'>
           <Button onClick={()=>{
               signInWithGoogle()
               .then(result=>{setUser(result.user)
                history.push(redirect)
               })
               .catch(error=>{
                   setError(error.message)
               })
           }} style={{borderRadius:"10px", marginRight:"3px" }} type="submit">Google SignIn</Button>
           
           </div>
          </div>
        </div>
    );
};

export default LogIn;