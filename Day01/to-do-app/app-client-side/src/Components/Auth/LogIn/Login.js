import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const Login = () => {
 const navigate = useNavigate()
 const [signInWithGoogle] = useSignInWithGoogle(auth);
 const hadelGooleLogin = () => {
  signInWithGoogle();
  navigate('/app')
 }
 return (
  <div className='flex justify-center items-center '>
   <input type="submit" onClick={hadelGooleLogin} value='LogIn With Google' class="input btn bg-primary w-full max-w-xs my-2" />
  </div>
 );
};

export default Login;