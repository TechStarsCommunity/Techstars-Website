import React, { useContext, useState } from 'react'
import login from "../assets/image/login.svg"
import logo from "../assets/image/Logo1.svg"
import or from "../assets/image/or.svg"
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from 'react-router-dom'
import useSubmit from '../hooks/useSubmit'
import { loginSchema } from '../config/schema'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AuthContext } from '../provider/AuthProvider'
import { auth } from '../config/firebase'

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit: newSubmit, errors } = useSubmit(loginSchema);
    const { setMyUserDb } = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const [loginError, setLoginError] = useState('');

    const onLogin = async (data) => {
        try {
            setLoading(true);
            setLoginError('');

            const { email, password } = data;

            // Perform authentication logic here (e.g., with Firebase, your backend, etc.)
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (user && user.uid) {
                setMyUserDb(user)
            }

            // If the user data is fetched from Firestore and needed, fetch it here
            setLoading(false);
            navigate("/");
        } catch (error) {
            console.error('Error during login:', error);
            setLoading(false);
            if (error.code === 'auth/user-not-found') {
                // Email is not registered
                setLoginError('Email is not registered');
            } else if (error.code === 'auth/wrong-password') {
                // Password is incorrect
                setLoginError('Password is incorrect');
            } else {
                // Handle other types of errors
                setLoginError('An error occurred during login. Please try again later.');
                console.log('An error occurred during login:', error);
            }
        }
    };
    return (
        <div className='w-full grid gap[20px] grid-cols-1 md:grid-cols-2 h-[100vh]'>
            <div className='w-full h-[100vh] flex flex-col gap-[25px] items-start p-[20px] px-[40px]'>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-[160px] h-[60px]'>
                        <img src={logo} alt="" className='w-full h-full' />
                    </div>
                </div>
                <div className='grid gap-[40px] w-full'>
                    <div className=''>
                        <h2 className='text-3xl font-bold mb-2'>Welcome Back!</h2>
                        <p className='text-lg'>Continue right Where You stopped</p>
                    </div>
                    <div className='w-full'>
                        <button className='px-[30px] py-[10px] rounded-md border border-black w-full font-bold flex items-center gap-2 justify-center'>
                            <FcGoogle size={35} />
                            <p>
                                Sign in with Google
                            </p>
                        </button>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img src={or} alt="" />
                </div>
                <form className="w-full grid gap-[15px]" onSubmit={newSubmit(onLogin)}>
                    <div className='w-full grid gap-[10px]'>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input id='email' type="text" placeholder='e.g user@gmail.com' className=' p-[10px] border-[#E8E8E8] border ' {...register("email")} />
                        {errors.email && (
                            <p
                                style={{ textTransform: "capitalize" }}
                                className="text-red-600"
                            >
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className='w-full grid gap-[10px]'>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input id='password' type="password" placeholder='Password' className=' p-[10px] border-[#E8E8E8] border ' {...register("password")} />
                        {errors.password && (
                            <p
                                style={{ textTransform: "capitalize" }}
                                className="text-red-600"
                            >
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <button disabled={loading} type='submit' className='px-[30px] py-[10px] rounded-md border border-black w-full font-bold bg-black text-white'>
                        {loading ? "Loading..." : "Sign in"}
                    </button>
                </form >
                <div className='w-full text-center p-[10px]'>
                    <p>You don't have an account? <Link to="/signup"><span className='text-[#750FF7]'>Sign Up</span></Link></p>
                </div>
            </div>
            <div className='hidden md:flex w-full h-[100vh] bg-white'>
                <img src={login} alt="" className='h-full w-full object-contain' />
            </div>
        </div>
    )
}

export default Login