import React, { useContext } from 'react'
import login from "../assets/image/login.svg"
import logo from "../assets/image/Logo1.svg"
import or from "../assets/image/or.svg"
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from 'react-router-dom'
import { signUpSchema } from '../config/schema'
import useSubmit from '../hooks/useSubmit'
import { auth, db, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import useCheckUserExistence from '../hooks/useCheckUserExistence'
import { AuthContext } from "../provider/AuthProvider"

const SignUp = () => {
    const navigate = useNavigate()
    const { logout, setMyUserDb } = useContext(AuthContext);
    const { register, handleSubmit, errors } = useSubmit(signUpSchema);
    const [user] = useAuthState(auth);
    const usersRef = collection(db, 'userRef');

    const signUserOut = async () => {
        logout();
        // navigate("/");
    }


    const signInWithGoogle = async () => {
        if (user) {
            return;
            navigate("/");

        }
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            if (user && user.uid) {
                const authenticatedUserId = user.uid;

                const isUserExisting = await useCheckUserExistence(authenticatedUserId);

                if (isUserExisting) {
                    navigate("/");
                } else {
                    // User schema doesn't exist, create the user schema and redirect
                    const userData = {
                        userId: authenticatedUserId,
                        email: user.email,
                        username: user.displayName,
                        role: "user"
                    };

                    // Create the user schema in Firestore
                    await setDoc(doc(usersRef, authenticatedUserId), userData);

                    // Update the user context or perform any other necessary actions
                    setMyUserDb(userData);

                    // Navigate to the desired page
                    navigate("/");
                }
            } else {
                console.error("Error signing in with Google: User information not available.");
            }
        } catch (error) {
            console.error("Error signing in with Google:", error);
        }
    }

    const onSignUp = async (data) => {
        try {
            const { email, password } = data;
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const parts = email.split("@");

            // parts[0] now contains the part before the "@" symbol
            const username = parts[0];

            if (user && user.uid) {
                const authenticatedUserId = user.uid;

                const isUserExisting = await useCheckUserExistence(authenticatedUserId);

                if (isUserExisting) {
                    navigate(`/`);
                    return;
                } else {
                    // User schema doesn't exist, create the user schema and redirect
                    const userData = {
                        userId: authenticatedUserId,
                        email: user.email,
                        username: username,
                        role: "user",
                    };

                    // Create the user schema in Firestore
                    await setDoc(doc(usersRef, authenticatedUserId), userData);

                    // Update the user context or perform any other necessary actions
                    setMyUserDb(userData);
                    alert("Account Created Sucessfully")

                    // Navigate to the desired page
                    navigate(`/`);
                }
            } else {
                console.error("Error signing in with Google: User information not available.");
            }
        } catch (error) {
            console.error('Error creating user:', error);
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
                        <h2 className='text-3xl font-bold mb-2'>Create Your Account</h2>
                        <p className='text-lg'>Fill In Your details let's get started</p>
                    </div>
                    <div className='w-full'>
                        <button onClick={signInWithGoogle} className='px-[30px] py-[10px] rounded-md border border-black w-full font-bold flex items-center gap-2 justify-center'>
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
                <form className="w-full grid gap-[10px]" onSubmit={handleSubmit(onSignUp)}>
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
                    <div className='w-full grid gap-[10px]'>
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input id="confirmPassword" type="password" placeholder='Password' className=' p-[10px] border-[#E8E8E8] border ' {...register("confirmPassword")} />
                        {errors.confirmPassword && (
                            <p
                                style={{ textTransform: "capitalize" }}
                                className="text-red-600"
                            >
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <button type='submit' className='px-[30px] py-[10px] rounded-md border border-black w-full font-bold bg-black text-white'>
                        Sign Up
                    </button>
                </form >
                <div className='w-full text-center  p-[20px]'>
                    <p>Already have an account? <Link to="/login"><span className='text-[#750FF7]'>Sign In</span></Link></p>
                </div>
            </div>
            <div className='hidden md:flex w-full h-[100vh] bg-white'>
                <img src={login} alt="" className='h-full w-full object-contain' />
            </div>
        </div>
    )
}

export default SignUp