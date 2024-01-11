import React, {useState, useEffect } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";

const LaptopNavbar = () => {
    return (
        <div className='navbarContainer fixed top-0 left-0 right-0 flex w-full p-4 bg-yellow'>
            <div className='navbarLeft flex-1 w-1/3'>left</div>
            <div className='navbarCenter flex1 w-5/12'>Center</div>
            <div className='navbarRight flex-1 w-2/5'>Right</div>
        </div>
    );
}

const MobileNavbar = () => {
    return (
        <div className='navbarContainer fixed bottom-0 left-0 right-0 flex w-full p-4 bg-yellow'>
            <GrHomeRounded className='w-1/4 h-7 text-blue' />
            <LuSearch className='w-1/4 h-7 text-blue' />
            <TbSquareRoundedPlus className='w-1/4 h-7 text-blue' />
            {/* <IoChatbubbleEllipsesOutline className='w-1/5 h-7 text-blue' /> */}
            <HiOutlineUser className='w-1/4 h-7 text-blue' />
        </div>
    );
}

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobileSize = window.matchMedia('(max-width: 768px)').matches;
            setIsMobile(isMobileSize);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },
    {});

    return (
        <div className={`navbar ${isMobile ? 'mobile-navbar' : 'laptop-navbar'}`}>
            {isMobile ? <MobileNavbar /> : <LaptopNavbar />}
        </div>
    );
}

export default Navbar;