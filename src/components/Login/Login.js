import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/google.svg'
import fbLogo from '../../images/facebook.svg'
import auth from '../../firebase.init';
import {signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {


    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailBlur = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
         const user = result.user;
         console.log(user)
        })
        .catch(error =>{
            console.log('email already in use')
            
        })
    }

    return (
        <div className="w-full h-[80vh] flex justify-center items-center">
            <div className="login shadow-2xl rounded-xl">
                <div className='h-[70px] bg-[#73a24e] flex justify-center items-center rounded-t-xl'>
                    <h1 className='font-bold text-[#fff] text-[28px]'>Log In</h1>
                </div>
                <form onSubmit={handleFormSubmit} className='w-full px-10 mt-10 flex flex-col justify-center items-center gap-5' action="">

                    <div  className="form-group">
                        <input onBlur={handleEmailBlur} className='w-[415px] h-[55px] bg-[#f5eec2] font-semibold focus:outline-none placeholder:text-[#39395f] rounded-[25px] pl-5' type="email" name="email" id="" placeholder='Email' />
                    </div>

                    <div className="form-group">
                        <input onBlur={handlePasswordBlur}  className='w-[415px] h-[55px] bg-[#f5eec2] placeholder:text-[#39395f] rounded-[25px] pl-5 focus:outline-none font-semibold' type="password" name="password" id="" placeholder='Password' />
                    </div>
                    <div className="form-btn w-[60%]">
                        <input  className='w-full  py-3 bg-[#73a24e] rounded-[25px] text-[#fff] font-semibold active:scale-95' type="submit" value="Log In"/>
                    </div>
                </form>
                <h1 className='text-center font-semibold my-3 text-[#334155]'>Or Login with</h1>
                <div className='flex justify-center items-center gap-5 font-semibold'>
                    
                    <button><img className='h-[50px] w-[40px]' src={googleLogo} alt="" /></button>
                    <button><img className='h-[50px] w-[45px]' src={fbLogo} alt="" /></button>
                </div>
                <p className='text-center my-5 text-[18px] text-[#334155] font-roboto font-semibold'> Don't have an account? <Link className='text-[#39395f] hover:border-b' to='/signup'>Sign Up Now</Link></p>
            </div>
        </div>
    );
};

export default Login;