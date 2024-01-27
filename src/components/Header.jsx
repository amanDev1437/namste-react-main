import React from 'react'
import { LOGO_URL } from '../utils/constant';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () =>{
    const [btnName, setBtnName] = useState("LogIn");

    const onlineStatus = useOnlineStatus();

    return(
        <div className="flex justify-between bg-orange-200">
            <div className="logo">
                <img className="w-22" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="flex">
                <ul className='flex p-5 m-5 items-center'>
                    <li className='px-4'>
                        Online Status: {onlineStatus ? "yes": "no"}
                    </li>
                    <li className='px-4'><Link to="/">Home</Link></li>
                    <li className='px-4'><Link to="/about">About Us</Link></li>
                    <li className='px-4'><Link to="/contact">Contact Us</Link></li>
                    <li className='px-4'><Link to="/grocery">Grocery</Link></li>
                    <li className='px-4'>Cart</li>
                    <button onClick={() =>{
                        btnName ==="LogIn"?setBtnName("LogOut"):setBtnName("LogIn");
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    );
}

export default Header