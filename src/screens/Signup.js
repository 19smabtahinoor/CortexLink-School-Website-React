import React from 'react';
import styled from "styled-components";
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiGoogleFill } from "react-icons/ri";


function Signup() {
    return (
        <>

            <Wrapper>
                <section className="signup__section px-12 my-6 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">


                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-20">
                        <div className="col-span-1 order-2 lg:order-1 xl:order-1 2xl:order-1">
                            <div className="">
                                <h1 className="signup__heading font-bold text-2xl text-center">
                                    Sign Up to your cortexlink account
                                </h1>

                                <div className="flex justify-center space-x-8 my-6">

                                    <div className="flex items-center space-x-3">
                                        <input className="w-4 h-4" type="radio" id="teachers" name="radio__option" value="Teacher" />
                                        <div className="flex flex-col">
                                            <span className="text-gray-600 text-sm">Sign Up as</span>
                                            <label htmlFor="teachers" className="text-gray-700 font-semibold text-xl">Teacher</label>
                                        </div>

                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <input className="w-4 h-4" type="radio" id="parents" name="radio__option" value="Parents" />
                                        <div className="flex flex-col">
                                            <span className="text-gray-600 text-sm">Sign Up as</span>
                                            <label htmlFor="parents" className="text-gray-700 font-semibold text-xl">Parents</label>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            {/* sign up form  */}
                            <div>
                                <form action="" className="flex flex-col">
                                    <input type="text" className="w-full my-3 rounded-full px-5 py-3 bg-transparent border border-gray-300 outline-none focus:border-blue-800" placeholder="Username" />
                                    <input type="email" className="w-full my-3 rounded-full px-5 py-3 bg-transparent border border-gray-300 outline-none focus:border focus:border-blue-800" placeholder="Email" />
                                    <input type="password" className="w-full my-3 rounded-full px-5 py-3 bg-transparent border border-gray-300 outline-none focus:border focus:border-blue-800" placeholder="Password" />
                                    <input type="password" className="w-full my-3 rounded-full px-5 py-3 bg-transparent border border-gray-300 outline-none focus:border focus:border-blue-800" placeholder="Confirm Password" />

                                    <button className="bg-blue-800 rounded-full px-8 py-3 flex justify-center text-white font-semibold w-40 mx-auto my-3">Sign Up</button>
                                </form>



                                <div>
                                    <h3 className="flex flex-row items-center justify-center text-gray-800 text-xl"><span className="w-48 border-b border-gray-400 mr-2"></span>Or <span className="w-48 border-b border-gray-400 ml-2"></span></h3>

                                    <div className="flex space-x-3 justify-center my-4">
                                        <Button className="signup__specialbtn" startIcon={<RiFacebookCircleFill />}>Sign In With</Button>
                                        <Button className="signup__specialbtn" startIcon={<RiGoogleFill />}>Sign In With</Button>
                                    </div>

                                </div>
                            </div>


                        </div>

                        <div className="col-span-1 order-1 lg:order-2 xl:order-2 2xl:order-2 bg-blue-900 h-screen">
                            <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center h-screen">
                                <div className="flex flex-col relative -ml-10 lg:ml-0 xl:ml-0 2xl:-ml-10">
                                    <NavLink to="/login">
                                        <button className=" text-white font-semibold px-8 py-3 rounded-tr-full rounded-br-full w-full my-3 border border-white">Login </button>
                                    </NavLink>
                                    <NavLink to="/signup" activeClassName="bg-white text-white font-semibold px-7 py-3 rounded-tr-full rounded-br-full w-full my-3 border border-white text-blue-900">
                                        Sign Up
                                    </NavLink>
                                </div>

                                <div>
                                    <img src="../../assets/signup.png" alt="signup page" width="400px" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <Footer />
                </section>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.section`
    .signup__section {
        background: #f1f3f9;

        .signup__heading {
            color: #1f155e;
        }
    }

    .signup__specialbtn{
        border-radius:50px !important;
        border:1px solid #ddd !important;
        text-transform:capitalize !important;
        padding:12px 34px !important;
        font-size:16px !important;
    }
    `;


export default Signup;