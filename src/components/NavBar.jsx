import React, { useContext, useEffect, useState } from 'react'
import Logo from "../assets/image/Logo1.svg"
import { AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';


const NavBar = () => {
    const navigate = useNavigate();
    const { logout, setMyUserDb, user } = useContext(AuthContext);
    const [disableScroll, setDisableScroll] = useState(false);
    const [navState, setNavState] = useState(false)
    const toggle = () => {
        setNavState(!navState);
        setDisableScroll(!disableScroll)
    }

    const signUserOut = async () => {
        logout();
        toggle();
        navigate("/");
    }

    useEffect(() => {
        if (disableScroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [disableScroll]);

    return (
        <div className='w-full flex px-[20px]  md:px-[64px] py-[20px] justify-between items-center'>
            <Link to="/">
                <div className='w-[160px] h-[60px]'>
                    <img src={Logo} alt="" className='w-full h-full' />
                </div>
            </Link>
            <div className={`  ${navState ? "flex absolute w-full h-full top-0 left-0  z-10 bg-black/80" : ""}`}>
                <div className={`${navState ? "flex flex-col gap-[25px] p-[20px] h-full z-10 " : "hidden"}  md:flex md:gap-[40px] items-center ${navState ? "w-[80%] bg-white absolute top-0 left-0" : "relative"}`} >
                    {navState && (
                        <div className="flex justify-between items-center w-full">
                            <Link to="/">
                                <div className='w-[160px] h-[60px]'>
                                    <img src={Logo} alt="" className='w-full h-full' />
                                </div>
                            </Link>
                            <div className='flex md:hidden cursor-pointer' onClick={toggle}>
                                <AiOutlineClose size={30} />
                            </div>
                        </div>
                    )}
                    <Link to="/" className={`${navState ? "w-full" : ""}`}>
                        <p className={`text-[16px] font-[400]  rounded-sm  ${navState ? "w-full text-center " : ""}`}>
                            Home
                        </p>
                    </Link>
                    <Link to="/about" className={`${navState ? "w-full" : ""}`}>
                        <p className={`text-[16px] font-[400] rounded-sm  ${navState ? "w-full text-center " : ""}`}>
                            About Us
                        </p>
                    </Link>
                    <Link to="/featured" className={`${navState ? "w-full" : ""}`}>
                        <p className={`text-[16px] font-[400] rounded-sm  ${navState ? "w-full text-center " : ""}`}>
                            Featured Projects
                        </p>
                    </Link>
                    <Link to="/blogs" className={`${navState ? "w-full" : ""}`}>
                        <p className={`text-[16px] font-[400] rounded-sm  ${navState ? "w-full text-center" : ""}`}>
                            Blog
                        </p>
                    </Link>
                    {navState == true && !user ? (
                        <Link to="/login" className='w-full'>
                            <button className='px-[30px] py-[10px] rounded-md border border-black w-full bg-[#750ff7] text-white '>
                                Login
                            </button>
                        </Link>
                    ) : ""}
                    {navState == true && user ? (
                        <button onClick={signUserOut} className='px-[30px] py-[10px] rounded-md border border-black w-full bg-[#750ff7] text-white '>
                            Logout
                        </button>) : ""}
                </div>
            </div>
            <div className='hidden md:flex'>
                {!user && <Link to="/login">
                    <button className='px-[24px] py-[18px] rounded-md border border-black w-[150px]'>
                        Log in
                    </button>
                </Link>}
                {user && (
                    <button className=' h-[50px] w-[50px] flex items-center justify-center rounded-full border border-black'>
                        <AiOutlineUser size={30} />
                    </button>
                )}
            </div>
            <div className='flex md:hidden cursor-pointer' onClick={toggle}>
                <AiOutlineMenu size={30} />
            </div>
        </div>
    )
}

export default NavBar