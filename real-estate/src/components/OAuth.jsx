import React from 'react'
import { GoogleAuthProvider,getAuth ,signInWithPopup} from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/user';
import { useNavigate } from 'react-router-dom';

const OAuth = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();   
    const handleClick = async () => {
        try {
           const provider=new GoogleAuthProvider();
           const auth=getAuth(app);
           const result=await signInWithPopup(auth,provider);
        //    console.log(result);
        const res=await fetch('/api/v1/google',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL}),
        })
        const data=await res.json();
        // console.log(data);
        dispatch(signInSuccess(data.data));
        navigate('/');
        } catch (error) {
            console.log("error occure",error);
        }
    }
  return (
    <button onClick={handleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>Continue with google</button>
  )
}

export default OAuth