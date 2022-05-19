import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MyApp = () => {
 return (
  <div class="drawer drawer-mobile">
   <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
   <div class="drawer-content ">
    <h1 className="text-4xl font-bold flex justify-center py-10 uppercase">Finish Your Job and Track your Self</h1>
    <Outlet></Outlet>
   </div>
   <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label>
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
     <li><Link to=''>App</Link></li>
     <li><Link to='app/list'>Tasks</Link></li>
    </ul>

   </div>
  </div>
 );
};

export default MyApp;