import React from 'react'
import { Link } from 'react-router-dom'
import back from '../assets/back.jpg'
const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
        
        <h1 className='text-3xl font-semibold my-7 text-center'>Sign Up</h1>
        <form action="" className='flex flex-col gap-4 w-12/12'>
            <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username'/>
            <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email'/>
            <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password'/>
            <input type="password" placeholder='confirm-password' className='border p-3 rounded-lg' id='cnfrm-password'/>
            <input type="phone" placeholder='phone' className='border p-3 rounded-lg' id='phone'/>

            <button className='bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80'>Sign Up</button>
        </form>
        
        <div className='flex mt-5 gap-2'>
            <p>Already have an account ?</p>
            <Link to={'/sign-in'}>
               <span className='text-blue-700'>Sign In</span>
            </Link>
        </div>

       
    </div>
  )
}

export default SignUp