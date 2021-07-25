import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)

    const changeSidebar = () => {
        if (window.innerWidth <= 1280) {
            setSidebar(true)
        } else {
            setSidebar(false)
        }
    }
    window.addEventListener('resize', changeSidebar)
    return (
        <Wrappaer>
            {sidebar ? (
                <div className="mobile__bottom_wrapper w-full z-40">
                    <div className="flex justify-center items-center space-x-2">
                        <NavLink to="/"  className="menu_mobile flex flex-row items-center space-x-3  px-3 py-3 my-2">
                                <i className="text-white text-xl fas fa-home home__icon"></i>
                        </NavLink>

                        <NavLink to="/teachers" activeClassName="menu_active_mobile" className="menu_mobile flex flex-row items-center space-x-3  px-3 py-3 my-2">
                                <i className="text-white text-xl fas fa-chalkboard-teacher home__icon"></i>
                        </NavLink>

                        <NavLink to="/students" activeClassName="menu_active_mobile" className="menu_mobile flex flex-row items-center space-x-3  px-3 py-3 my-2">
                                <i className="text-white text-xl fas fa-book-reader home__icon"></i>
                        </NavLink>

                        <NavLink to="/parents-dashboard"  activeClassName="menu_active_mobile" className="menu_mobile flex flex-row items-center space-x-3  px-3 py-3 my-2">
                            <i className="text-white text-xl fas fa-columns home__icon"></i>
                        </NavLink>

                        <NavLink to="/mycourses" activeClassName="menu_active_mobile" className="menu_mobile flex flex-row items-center space-x-3  px-3 py-3 my-2">
                                <i className="text-white text-xl far fa-file-alt home__icon"></i>
                        </NavLink>

                        <NavLink to="/assignments" activeClassName="menu_active_mobile" className="menu_mobile flex flex-row items-center space-x-3  px-3 py-3 my-2">
                                <i className="text-white text-xl fas fa-book home__icon"></i>
                        </NavLink>

                        <NavLink to="/messages" activeClassName="menu_active_mobile" className="menu_mobile flex flex-row items-center space-x-3  px-3 py-3 my-2">
                                <i className="text-white text-xl far fa-envelope home__icon"></i>
                        </NavLink>
                        <NavLink to="/signup" activeClassName="menu_active_mobile" className="menu_mobile flex flex-row items-center space-x-3  px-3 py-3 my-2">
                                <i className="text-white text-xl far fa-user home__icon"></i>
                        </NavLink>
                    </div>
                </div>
            ) : (
                <aside className="sidebar__wrapper hidden lg:inline-block">
                    <NavLink to="/">
                            <div className="h-20">
                                <img className="w-full" src="../../assets/logo.png" alt="logo" />
                            </div>
                    </NavLink>
                    
                    <div className="pl-6">
                        <ul>
                            <NavLink to="/" className="menu flex flex-row items-center space-x-3  pl-4 py-3 my-2" >

                                <i className="fas fa-home home__icon"></i>
                                <span className="text-white home__menu__text">Home</span>

                            </NavLink>

                                <NavLink to="/teachers" activeClassName="menu_active" className="menu flex flex-row items-center space-x-3  pl-4 py-3 my-2">
                                <i className="fas fa-chalkboard-teacher home__icon"></i>
                                <span className="text-white home__menu__text">Teachers</span>
                            </NavLink>

                            <NavLink to="/students" activeClassName="menu_active" className="menu flex flex-row items-center space-x-3  pl-4 py-3 my-2">
                                <i className="fas fa-book-reader home__icon"></i>
                                <span className="text-white home__menu__text">Students</span>
                            </NavLink>
                            {/* 65457547 */}
                            <NavLink to="/parents-dashboard" activeClassName="menu_active" className="menu flex flex-row items-center space-x-3  pl-4 py-3 my-2">

                                <i className="fas fa-columns home__icon"></i>
                                <span className="text-white home__menu__text">Parents</span>

                            </NavLink>

                            <NavLink to="/mycourses" activeClassName="menu_active" className="menu flex flex-row items-center space-x-3  pl-4 py-3 my-2">

                                <i className="far fa-file-alt home__icon"></i>
                                <span className="text-white home__menu__text">My Course</span>

                            </NavLink>

                                <NavLink to="/assignments" activeClassName="menu_active" className="menu flex flex-row items-center space-x-3  pl-4 py-3 my-2">

                                <i className="fas fa-book home__icon"></i>
                                <span className="text-white home__menu__text">Assignments</span>

                            </NavLink>

                            <NavLink to="/messages" activeClassName="menu_active" className="menu flex flex-row items-center space-x-3  pl-4 py-3 my-2">

                                <i className="far fa-envelope home__icon"></i>
                                <span className="text-white home__menu__text">Messages</span>

                            </NavLink>

                            <NavLink to="/signup" activeClassName="menu_active" className="menu flex flex-row items-center space-x-3  pl-4 py-3 my-2">

                                <i className="far fa-user home__icon"></i>
                                <span className="text-white home__menu__text">Sign Up</span>

                            </NavLink>

                        </ul>
                    </div>
                </aside >
            )}
        </Wrappaer>
    );
}

const Wrappaer = styled.div`
.sidebar__wrapper{
    background-color:#1F155E;
    height:100vh;
    position: fixed;
    
    }

    
    .menu{
        background:#1F155E;
        .home__icon{
            color:white;
        }
    }
    .menu_active{
        border-top-left-radius:50px;
        border-bottom-left-radius:50px;
        background:white;
        color:#1F155E;
        .home__menu__text{
            color:#1F155E;
            font-weight:600;
        }
        .home__icon{
            color:#1F155E;
        }
       
    }

    .mobile__bottom_wrapper{
        background-color:#1F155E;
        position: fixed;
        bottom:0px;
        left:0px;
    }


  @media (min-width: 1400px) {
    .sidebar__wrapper{
        width:250px;
    }
  }

  .menu_mobile{

  }
  .menu_active_mobile{
      background: white;
      border-radius: 10px;
      .home__icon{
          color:#1F155E;
      }
  }

`
export default Sidebar;