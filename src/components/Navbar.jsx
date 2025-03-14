// eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// import assets from '../assets/assets'
// import { NavLink, useNavigate } from 'react-router-dom';

// const Navbar = () => {

// const navigate = useNavigate();

// const [showMenu, setShowMenu] = useState(false);
// const [token, setToken] = useState(true);


//   return (
//     <div className='flex items-center justify-between text-sm  mb-5 border-b border-b-gray-700 border-l-gray-700 border-r-gray-700 rounded-full mx-3 h-20 shadow shadow-violet-700'>
//       <img onClick={()=>navigate('/')} className='w-40 h-28 mx-4 cursor-pointer object-cover' src={assets.logo} alt="Logo" />
//       <ul className='hidden md:flex items-start gap-5 font-bold '>

//         <NavLink to="/">
//           <li className='py-1 shadow-violet-500' >HOME</li>
//           <hr className='border-none outline-none h-0.5 bg-violet-700 w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to="/doctors">
//           <li className='py-1  shadow-violet-500' > DOCTORS</li>
//           <hr className='border-none outline-none h-0.5 bg-violet-700 w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to="/contact">
//           <li className='py-1  shadow-violet-500' >CONTACT</li>
//           <hr className='border-none outline-none h-0.5 bg-violet-700 w-3/5 m-auto hidden' />
//         </NavLink>
//         <NavLink to="/about">
//           <li className='py-1  shadow-violet-500' >ABOUT</li>
//           <hr className='border-none outline-none h-0.5 bg-violet-700 w-3/5 m-auto hidden' />
//         </NavLink>
      
//       </ul>
//       <div className='flex items-center gap-4 '>
//         {
//             token ? <div className='flex items-center gap-2 cursor-pointer group relative'>
//                 <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
//                 <img className='w-2.5 ' src={assets.dropdown_icon} alt="" />
//                 <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
//                     <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
//                         <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                         <p onClick={()=>navigate('/my-appointments')}  className='hover:text-black cursor-pointer'>My Appointments</p>
//                         <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
//                     </div>
//                 </div>
//             </div>
//             :
//             <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block '>Create Account</button>
//         }

//         <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
//        {/* Mobile Menu */}

// <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-10/12'}md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
//   <div className='flex items-center justify-between px-5 py-6'>
//     <img className='w-36' src={assets.logo} alt="" />
//     <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
//   </div>

//   <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
//     <NavLink onClick={()=>setShowMenu(false)} to='/'><p  className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
//     <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
//     <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
//     <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
//   </ul>
// </div>


//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useContext } from 'react';
import assets from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Navbar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext); 
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(null);

  // Retrieve token from localStorage when component mounts
  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   console.log(storedToken)
  //   setToken(storedToken);
  //   if (storedUserData) {
  //     setUserData(JSON.parse(storedUserData));
  //   }
  // }, []);

  const handleLogout = () => {

    setUser(null)
// window.location.reload(); // Ensure the navbar updates immediately
    navigate("/login");
  };

//   return (
//     <div className='flex items-center justify-between text-sm  mb-5 border-b border-b-gray-700 border-l-gray-700 border-r-gray-700 rounded-full mx-3 h-16 shadow shadow-violet-700'>
//       <img onClick={() => navigate('/')} className='w-40 h-28 mx-4 cursor-pointer object-cover  ' src={assets.logo} alt="Logo" />
//       <ul className='hidden md:flex items-start gap-5 font-bold '>
//         <NavLink to="/"><li className='py-1 shadow-violet-500'>HOME</li></NavLink>
//         <NavLink to="/doctors"><li className='py-1 shadow-violet-500'>DOCTORS</li></NavLink>
//         <NavLink to="/contact"><li className='py-1 shadow-violet-500'>CONTACT</li></NavLink>
//         <NavLink to="/about"><li className='py-1 shadow-violet-500'>ABOUT</li></NavLink>
//       </ul>

//    <div className='flex items-center gap-1 m-7'>
//         {
//           user ? (    
//               <div className='flex items-center gap-2 cursor-pointer group relative'>
//               {
//                 userData ? (
//                   <img className='w-12 rounded-full' src={assets.profile_pic} alt="Profile" />
//                 )
//                 : (
//                   <img className='w-12 rounded-full' src={assets.profile_pic1} alt="Profile" />
//                 )
//               }
          
            
//               <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" />
//               <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
//                 <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
//                   <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                   <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
//                   <p onClick={handleLogout} className='hover:text-black cursor-pointer'>Logout</p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
//           )
//         }

//         <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="Menu" />
        
//         {/* Mobile Menu */}
//         <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-10/12'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
//           <div className='flex items-center justify-between px-5 py-6'>
//             <img className='w-36' src={assets.logo} alt="Logo" />
//             <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close Menu" />
//           </div>
//           <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
//             <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };+

return (
  <div className='flex items-center justify-between text-sm mb-5 border-b border-gray-700 rounded-full mx-3 h-16 shadow'>
    <img onClick={() => navigate('/')} className='w-40 h-28 mx-4 cursor-pointer' src={assets.logo} alt="Logo" />
    <ul className='hidden md:flex items-start gap-5 font-bold '>
        <NavLink to="/"><li className='py-1 shadow-violet-500'>HOME</li></NavLink>
        <NavLink to="/doctors"><li className='py-1 shadow-violet-500'>DOCTORS</li></NavLink>
        <NavLink to="/contact"><li className='py-1 shadow-violet-500'>CONTACT</li></NavLink>
        <NavLink to="/about"><li className='py-1 shadow-violet-500'>ABOUT</li></NavLink>
      </ul>
    <div className='flex items-center gap-1 m-7'>
      {user ? (    
        <div className='flex items-center gap-2 cursor-pointer group relative'>
          {/* Display user profile picture dynamically */}
          <img 
            className='w-12 rounded-full' 
            src={user.image ? user.image : assets.profile_pic1} 
            alt="Profile" 
          />
          
          <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" />
          
          {/* Dropdown Menu */}
          <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
              <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
              <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
              <p onClick={handleLogout} className='hover:text-black cursor-pointer'>Logout</p>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
          Create Account
        </button>
      )}

      {/* Mobile Menu Button */}
      <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="Menu" />

      {/* Mobile Menu */}
      <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-10/12'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className='flex items-center justify-between px-5 py-6'>
          <img className='w-36' src={assets.logo} alt="Logo" />
          <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close Menu" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
          <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
        </ul>
      </div>
    </div>
  </div>
);
};

export default Navbar;
