import React from 'react'
import login from "../assets/image/login.svg"
import logo from "../assets/image/Logo1.svg"
import or from "../assets/image/or.svg"
import { FcGoogle } from "react-icons/fc"
import { Link } from 'react-router-dom'

const SignUp = () => {
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
                        <h2 className='text-3xl font-bold mb-2'>Create Your Account</h2>
                        <p className='text-lg'>Fill In Your details let's get started</p>
                    </div>
                    <div className='w-full'>
                        <button className='px-[30px] py-[10px] rounded-md border border-black w-full font-bold flex items-center gap-2 justify-center'>
                            <FcGoogle size={35} />
                            <p>
                                Sign Up with Google
                            </p>
                        </button>
                    </div>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <img src={or} alt="" />
                </div>
                <form className="w-full grid gap-[10px]">
                    <div className='w-full grid gap-[10px]'>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="text" placeholder='e.g user@gmail.com' className=' p-[10px] border-[#E8E8E8] border ' />
                    </div>
                    <div className='w-full grid gap-[10px]'>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" placeholder='Password' className=' p-[10px] border-[#E8E8E8] border ' />
                    </div>
                    <div className='w-full grid gap-[10px]'>
                        <label htmlFor="confirm Password">
                            Confirm Password
                        </label>
                        <input type="password" placeholder='Password' className=' p-[10px] border-[#E8E8E8] border ' />
                    </div>
                    <button className='px-[30px] py-[10px] rounded-md border border-black w-full font-bold bg-black text-white'>
                        Sign Up
                    </button>
                </form >
                <div className='w-full text-center'>
                    <p>Already have an account? <Link to="/signup"><span className='text-[#750FF7]'>Sign In</span></Link></p>
                </div>
            </div>
            <div className='hidden md:flex w-full h-[100vh] bg-white'>
                <img src={login} alt="" className='h-full w-full object-contain' />
            </div>
        </div>
    )
}

export default SignUp