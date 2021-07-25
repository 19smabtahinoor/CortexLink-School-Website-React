import styled from 'styled-components';
import React, { useState } from 'react';
import notifications from '../data/cortexlink.json';
import {NavLink} from 'react-router-dom';

function Navbar() {

    const [notificationData] = useState(notifications.Notifications)
    const [notificationChange,setNotificationChange] = useState(true)
    const [dropdown,setDropdown] = useState(true)
    return (
        <Wrapper>
            <header className="header py-3">
                <div className="flex flex-row-reverse items-center">
                    <div className=" flex flex-row items-center pr-4 space-x-4 mr-6 cursor-pointer" onClick={() => setDropdown(!dropdown)}>
                            <i className="header__icons bg-white p-3 rounded-full fas fa-user cursor-pointer"></i>
                            <div className="">
                                <h3 className="font-semibold text-gray-600 cursor-pointer">Username</h3>
                                <span className="text-gray-400 text-sm cursor-pointer">Designation</span>
                            </div>
                            <i className="header__icons fas fa-angle-down cursor-pointer"></i>
                        </div>
                    <div className="flex items-center" onClick={() => setNotificationChange(!notificationChange)}>
                        <span className="w-3 h-3 bg-red-600 p-1 rounded-full relative -right-8 -top-2 text-sm"></span>
                        <i className="bg-white p-3 mr-5 rounded-full header__icons fas fa-bell cursor-pointer"></i>
                    </div>
                    <div className="relative pr-20 items-center hidden lg: xl:flex 2xl:flex">
                        <i className="header__icons fas fa-search relative -right-7 cursor-pointer"></i>
                        <input className="px-4 py-2 pl-9 rounded-full" type="text" placeholder="Searchg here...." />
                    </div>
                </div>

                {!notificationChange && <div className="bg-white rounded-xl shadow-xl box-border p-6 absolute top-20 right-5 md:right-20 lg:right-20 xl:right-20 2xl:right-20 h-98 overflow-y-scroll scrollbar-hide z-50">

                    <div className="flex items-center border-b border-gray-400 space-x-5 pb-2">
                        <h1 className="text-blue-800 font-semibold flex flex-grow">Notification</h1>
                        <span className="bg-red-300 text-red-600 w-9 h-6 p-2 flex justify-center items-center rounded-xl">10</span>
                    </div>

                    <div className="grid grid-cols-1">
                        {notificationData.map(({ id, image, title, time }) => {
                            return (
                                <>
                                    <div className="flex space-x-2 items-center border-b border-gray-400 py-3 " key={id}>
                                        <img className="w-9 h-9 rounded-full" src={image} alt="Notifications" />
                                        <div className="flex flex-col">
                                            <h3 className="text-gray-600 font-semibold">{title}</h3>
                                            <span className="text-sm text-gray-300">{time}</span>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>


                    <div>
                        <NavLink to="/notifications">
                            <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg w-full my-3">Show all notifications !!! </button>
                        </NavLink>
                    </div>

                </div>}

                {/* dropdown  */}

                {!dropdown && <div className="bg-white rounded-xl shadow-xl box-border p-6 absolute top-20 right-5 md:right-10 lg:right-10 xl:right-10 2xl:right-10 h-98 z-50">

                    <div className="flex items-center space-x-3 pb-2 cursor-pointer">
                        <span><i className="fas fa-sign-out-alt text-gray-600 text-lg"></i></span>
                        <h1 className="text-gray-600 font-semibold">Logout</h1>
                    </div>
                </div>}
            </header>

        </Wrapper>
    );
}

const Wrapper = styled.div`
.header{
    background:#F1F3F9;
    width:100%;
        .header__icons{
        color:#1F155E;
        }
}
`

export default Navbar;