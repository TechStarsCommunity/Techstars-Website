import React, { useEffect, useState } from 'react'
import Logo from "../assets/image/Logo1.svg"
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag, AiOutlineShoppingCart } from 'react-icons/ai';

const NavBar = () => {
    const [disableScroll, setDisableScroll] = useState(false);
    const [navState, setNavState] = useState(false)
    const toggle = () => {
        setNavState(!navState);
        setDisableScroll(!disableScroll)
    }
    useEffect(() => {
        if (disableScroll) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [disableScroll]);
    return (
        <div className='w-full flex p-[20px] justify-between items-center'>
            <div className='w-[160px] h-[60px]'>
                <img src={Logo} alt="" className='w-full h-full' />
            </div>
            <div className={`  ${navState ? "flex absolute w-full h-full top-0 left-0  z-10 bg-black/80" : ""}`}>
                <div className={`${navState ? "flex flex-col gap-[25px] p-[20px] h-full z-10 " : "hidden"}  md:flex md:gap-[35px] items-center ${navState ? "w-[80%] bg-white absolute top-0 left-0" : "relative"}`} >
                    {navState && (
                        <div className="flex justify-between items-center w-full">
                            <div className='w-[160px] h-[60px]'>
                                <img src={Logo} alt="" className='w-full h-full' />
                            </div>
                            <div className='flex md:hidden cursor-pointer' onClick={toggle}>
                                <AiOutlineClose size={30} />
                            </div>
                        </div>
                    )}
                    <p className={`text-[18px] font-[400]  p-2 rounded-sm  ${navState ? "w-full bg-[grey]" : ""}`}>
                        Home
                    </p>
                    <p className={`text-[18px] font-[400] p-2 rounded-sm  ${navState ? "w-full bg-[grey]" : ""}`}>
                        About Us
                    </p>  <p className={`text-[18px] font-[400] p-2 rounded-sm  ${navState ? "w-full bg-[grey]" : ""}`}>
                        Featured Projects
                    </p>  <p className={`text-[18px] font-[400] p-2 rounded-sm  ${navState ? "w-full bg-[grey]" : ""}`}>
                        Blog
                    </p>
                </div>
            </div>
            <div className='hidden md:flex' onClick={toggle}>
                <button className='px-[30px] py-[10px] rounded-md border border-black'>
                    Contact Us
                </button>
            </div>
            <div className='flex md:hidden cursor-pointer' onClick={toggle}>
                <AiOutlineMenu size={30} />
            </div>
        </div>
    )
}

export default NavBar