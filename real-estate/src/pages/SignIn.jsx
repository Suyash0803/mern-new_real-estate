import React, { useState } from 'react';
import { Link}  from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import {signInSuccess,signInFailure,signInStart} from '../redux/user/user';
import OAuth from '../components/OAuth';

const SignIn = () => {
    const [formData, setFormData] = useState({});
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(false);
    const { error, loading } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log('submitted');

        try {
            dispatch(signInStart());
            const res = await fetch('/api/v1/sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok || data.success === false) {
                // setLoading(false);
                // setError(data.message || 'An error occurred');
                dispatch(signInFailure(data.message || 'An error occurred'));
                return;
            }
            // setLoading(false);
            // setError(null);
            dispatch(signInSuccess(data.data));
            navigate('/');
            console.log(data);
            // You can redirect or clear the form here if needed

        } catch (error) {
            // setError(error.message);
            dispatch(signInFailure(error.message));
            // console.error('Error:', error.message);
        } finally {
            // setLoading(false);
        }
    };

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className='text-3xl font-semibold my-7 text-center'>Sign In</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-12/12'>
                {/* <input type="text" placeholder='username' className='border p-3 rounded-lg' id='name' onChange={handleChange} /> */}
                <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
                <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
                {/* <input type="password" placeholder='confirm-password' className='border p-3 rounded-lg' id='confirm_password' onChange={handleChange} /> */}
                {/* <input type="text" placeholder='phone' className='border p-3 rounded-lg' id='phone' onChange={handleChange} /> */}

                <button disabled={loading} className='bg-slate-700 uppercase text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80'>
                    {loading ? 'Loading...' : 'Sign Up'}
                </button>
                <OAuth></OAuth>
            </form>

            {error && <p className='text-red-500 mt-4'>{error}</p>}

            <div className='flex mt-5 gap-2'>
                <p>Dont have an account?</p>
                <Link to={'/sign-up'}>
                    <span className='text-blue-700'>Sign Up</span>
                </Link>
            </div>
        </div>
    );
};

export default SignIn;
