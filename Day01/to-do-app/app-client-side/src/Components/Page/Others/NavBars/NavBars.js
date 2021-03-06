import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const NavBars = () => {
 const [user] = useAuthState(auth);

 const handelLogout = () => {
  signOut(auth)
 }
 return (
  <div class="navbar bg-base-100">
   <div class="navbar-start">
    <div class="dropdown">
     <label tabindex="0" class="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     </label>
     <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Item 1</a></li>
     </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">TODO APP</a>
   </div>
   <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
     <li><Link to='/'>Home</Link></li>
     <li><Link to='/app'>App</Link></li>
    </ul>
   </div>
   <div class="navbar-end">
    <ul>{
     user ? <button onClick={handelLogout} className="btn btn-primary">Logout</button>
      : <Link to='/login' className='btn btn-primary'>Login</Link>
    }
    </ul>
   </div>
  </div>
 );
};

export default NavBars;