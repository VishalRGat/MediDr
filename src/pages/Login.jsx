// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react'
// import { useNavigate } from "react-router-dom";


// const Login = () => {


//   const [state, setState] = useState('Sign Up')


//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [name, setName] = useState('')
//  const navigate = useNavigate()
//   const onSubmitHandler = async (event) => {
//     event.preventDefault()

//     //After successful login/signup, redirect to dashboard
//    navigate("/");



//   }


//   return (
//     <form className='min-h-[80vh] flex items-center ' >
//       <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg  '>
//         <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
//         <p>Please {state === 'Sign Up' ? "sign up" : "log in "}to book appointment</p>

//         {
//           state === "Sign Up" && <div className='w-full'>
//             <p>Full Name</p>
//             <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
//           </div>

//         }



//         <div className='w-full'>
//           <p>Email</p>
//           <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
//         </div>
//         <div className='w-full'>
//           <p>Password</p>
//           <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
//         </div>


//          <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
//         {
//           state === "Sign Up"
//             ?
//             <p>Already have an account ?{" "} <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span> </p>
//             :
//             <p>Create a New Account?{" "} <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click Here</span> </p>
//         } 


//       </div>

//     </form>

//   )
// }

// export default Login


import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';
import assets from '../assets/assets';

const Login = () => {
  const { setUser } = useContext(AppContext);
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     // Simulate authentication and token generation
//     const dummyToken = "sample-auth-token"; // Replace this with actual API response
//     localStorage.setItem("token", dummyToken); 
//   // Store token in local storage
// console.log("token", dummyToken)
//     // Navigate to dashboard after successful login/signup
//     navigate("/", { state: { token: dummyToken } });
//   };
const onSubmitHandler = (event) => {
  event.preventDefault();

  // Dummy user data (Replace with API call)
  const userData = {
    name: name || "Vishal Gat",
    email: email || "vishal@gmail.com",
    phone: "+91 9876543210",
    image: assets.profile_pic,
  };
  
  setUser(userData); // Update user data in context
  navigate("/"); 
}




  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign Up' ? "sign up" : "log in"} to book an appointment</p>

        {state === "Sign Up" && (
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' 
              type="text" 
              onChange={(e) => setName(e.target.value)} 
              value={name} required />
          </div>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} required />
        </div>

        <button type="submit" className='bg-primary text-white w-full py-2 rounded-md text-base'>
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>Already have an account?{" "} 
            <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span>
          </p>
        ) : (
          <p>Create a New Account?{" "} 
            <span onClick={() => setState('Sign Up')} className='text-primary underline cursor-pointer'>Click Here</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
