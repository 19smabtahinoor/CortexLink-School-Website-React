import React from 'react';
import styled from "styled-components";
import Footer from "../components/Footer";

function ForgotPassword() {
    return (
        <>

            <Wrapper>
                <section className="signup__section px-12 my-6 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">


                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-20">
                        <div className="col-span-1">
                            <div className="flex flex-col justify-center h-screen">
                                <h1 className="signup__heading font-bold text-2xl text-center py-3">
                                    Forgot Password
                                </h1>
                                {/* sign up form  */}
                                <div>
                                    <form action="" className="">
                                        <input type="email" className="w-full my-3 rounded-full px-5 py-3 bg-transparent border border-gray-300 outline-none focus:border-blue-800" placeholder="Email" />
                                        <button className="bg-blue-800 rounded-full px-8 py-3 flex justify-center text-white font-semibold mx-auto my-3">Recover Password</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 bg-blue-900 h-screen">
                            <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center h-screen">
                                <div>
                                    <img src="../../assets/Forgot password1.gif" alt="signup page" width="400px" />
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


export default ForgotPassword;