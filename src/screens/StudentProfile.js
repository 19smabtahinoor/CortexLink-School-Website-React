import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Footer from "../components/Footer";
import StudentsProfile from '../data/cortexlink.json';
import ParentDashboardGraph from '../components/ParentDashboardGraph'
import StudentsGraph from '../components/StudentsGraph';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useParams } from "react-router-dom"

function StudentProfile() {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    const { id } = useParams()
    useEffect(() => {
        const students = StudentsProfile.TopStudentList.find((element) => element.id === parseInt(id))
        setImage(students.image);
        setName(students.name);
        setPhoneNo(students.phoneNo);
        setAddress(students.address);
        setEmail(students.email);
    }, [id]);

    return (
        <>
            <Wrapper>
                <section className="studentsProfile__section px-12 my-6 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">
                    <h1 className="studentsProfile__heading font-semibold text-2xl">
                        Student Profile
                    </h1>
                    <div className="my-12 gap-10 bg-white rounded-xl p-8 box-border">

                        {/* students info  */}
                        <div key={id}>
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:place-items-center lg:place-items-start" >
                                {/* student image  */}
                                <div className="col-span-1">
                                    <img className="pb-3 w-full  rounded-xl" src={image} alt="student" />
                                </div>

                                {/* student name  */}
                                <div className="col-span-1">
                                    <h1 className="text-2xl lg:text-3xl xl:text-3xl text-blue-900 font-bold">{name} <span className="text-gray-400 text-lg font-light pl-3">(Student)</span></h1>

                                    <div className="flex items-center space-x-3 my-4">
                                        <i className="fas fa-user text-white bg-red-300 w-9 h-9 rounded-full p-2 flex justify-center items-center"></i>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-gray-400">Teacher</span>
                                            <h3 className="text-blue-700 font-semibold">History</h3>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <i className="fas fa-phone-alt text-white bg-red-300 w-9 h-9 rounded-full p-2 flex justify-center items-center"></i>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-gray-400">Phone</span>
                                            <h3 className="text-blue-700 font-semibold">{phoneNo}</h3>
                                        </div>
                                    </div>

                                </div>

                                {/* student address  */}
                                <div className="col-span-1 pt-7">
                                    <div className="flex items-center space-x-3 my-4">
                                        <i className="fas fa-map-marker-alt text-white bg-red-300 w-9 h-9 rounded-full p-2 flex justify-center items-center"></i>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-gray-400">Address</span>
                                            <h3 className="text-blue-700 font-semibold">{address}</h3>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <i className="fas fa-envelope text-white bg-red-300 w-9 h-9 rounded-full p-2 flex justify-center items-center"></i>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-gray-400">Email</span>
                                            <h3 className="text-blue-700 font-semibold">{email}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Student Graph  */}
                    <div className="grid grid-cols-1 place-items-center overflow-auto">
                        <div className="rounded-xl shadow-xl overflow-auto">
                            <ParentDashboardGraph />
                        </div>
                    </div>
                    {/* Student Graph 2  */}
                    <div className="grid grid-cols-1 place-items-center overflow-auto my-12">
                        <div className="rounded-xl shadow-xl overflow-auto">
                            <StudentsGraph />
                        </div>
                    </div>

                    {/* Close Button  */}
                    <NavLink to="/students" className="flex justify-end">
                        <Button className="close__button">Close</Button>
                    </NavLink>
                    <Footer />
                </section>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.section`
  .studentsProfile__section {
    background: #f1f3f9;

    .studentsProfile__heading {
      color: #1f155e;
    }
    .close__button{
        background:#193ABA;
        color:white;
        text-transform: capitalize !important;
        border-radius:50px !important;
        padding:12px 36px;
        font-weight: bold;
        font-size:15px;
        border:1px solid #193ABA;
    }
  }
`;

export default StudentProfile;