import React, { useState } from "react"
import styled from 'styled-components';
import Footer from '../components/Footer';
import { useDropzone } from "react-dropzone"
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

function AddNewStudent() {

    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            )
        },
    })

    const image1 = files.map((file) => (
        <div key={file.name}>
            <div>
                <img src={file.preview} style={{ width: "100%", height: "160px", objectFit: "cover" }} alt="preview" />
            </div>
        </div>
    ))

    return (
        <>
            <Wrapper>
                <section className="add__courses__section px-12 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  pt-12 pb-12">
                        <h1 className="add__courses__heading font-semibold text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl flex flex-grow">Add New Student</h1>
                    </div>

                    {/* Add New student Form Area  */}
                    <div className="new__course__wrapper bg-white rounded-xl shadow-lg p-8 box-border">
                        <h3 className="font-semibold text-gray-700 pb-4 border-b border-gray-400 text-lg">Basic Info</h3>

                        <div className="mt-6">
                            <form action="" className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-20">

                                <div className="col-span-1">
                                    <div {...getRootProps()}>
                                        <div className="upload__area__1 border border-dashed border-gray-400 rounded-xl">
                                            <div className="flex justify-center items-center flex-col mt-9">
                                                <i className="fas fa-cloud-upload-alt text-3xl text-gray-400"></i>
                                                <span className="text-gray-400 font-semibold">Photo*</span>
                                            </div>
                                            <div className="uploaded__image">{image1}</div>
                                        </div>
                                        <input className=" " {...getInputProps()} placeholder="Upload Your Files" />
                                    </div>
                                </div>
                                
                                <div className="col-span-2">
                                    <div>
                                        <label className="text-gray-600 text-lg py-2  inline-block" htmlFor="firstname">First Name*</label>
                                        <input className="w-full py-2 pl-4 mb-2 border border-gray-200 rounded-lg outline-none" type="text" id="firstname" />

                                        <label className="text-gray-600 text-lg py-2 inline-block" htmlFor="email">Email*</label>
                                        <input className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none" type="text" id="email" />

                                        <label className="text-gray-600 text-lg py-2 inline-block" htmlFor="roll">Roll No*</label>
                                        <input className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none" type="text" id="roll" />

                                        <label className="text-gray-600 text-lg py-2 inline-block" htmlFor="birthdate">Date of Birth*</label>
                                        <input className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none" type="text" id="birthdate" />

                                        <label className="text-gray-600 text-lg py-2 inline-block" htmlFor="parentsname">Parents Name*</label>
                                        <input className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none" type="text" id="parentsname" />
                                    </div>

                                </div>

                                <div className="col-span-2">
                                   
                                    <div>
                                        <label className="text-gray-600 text-lg py-2  inline-block" htmlFor="firstname">Last Name*</label>
                                        <input className="w-full py-2 pl-4 mb-2 border border-gray-200 rounded-lg outline-none" type="text" id="firstname" />

                                        <label className="text-gray-600 text-lg py-2 inline-block" htmlFor="email">Registration Date*</label>
                                        <input className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none" type="text" id="email" />

                                        <label className="text-gray-600 text-lg py-2 inline-block" htmlFor="roll">Class*</label>
                                        <input className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none" type="text" id="roll" />

                                        <label className="text-gray-600 text-lg py-2 inline-block" htmlFor="birthdate">Blood group*</label>
                                        <input className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none" type="text" id="birthdate" />

                                        <label className="text-gray-600 text-lg py-2 inline-block" htmlFor="parentsname">Parents Mobile No.*</label>
                                        <input className="w-full py-2 pl-4 border border-gray-200 rounded-lg outline-none" type="text" id="parentsname" />
                                    </div>

                                    <div className="flex space-x-3 mt-8 justify-end">
                                        <NavLink to="/students">
                                            <Button className="cancel__button" >Cancel</Button>
                                        </NavLink>
                                        <NavLink to="/students">
                                            <Button className="submit__button" >Submit</Button>
                                        </NavLink>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                    <Footer />
                </section>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.section`
.add__courses__section{
    background:#F1F3F9;

    .add__courses__heading{
        color:#1F155E;
        margin:0px;
    }
    .upload__area__1{
        width:100%;
        height:160px;
        position: relative;
    }
    .uploaded__image {
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .submit__button{
        background:#193ABA;
        color:white;
        text-transform: capitalize !important;
        border-radius:50px !important;
        padding:12px 36px;
        font-weight: bold;
        font-size:15px;
        border:1px solid #193ABA;
    }
    .cancel__button{
        color:#193ABA;
        text-transform: capitalize !important;
        border-radius:50px !important;
        padding:12px 36px;
        font-size:15px;
        border:1px solid #193ABA;
        font-weight:bold !important;
    }
}
`

export default AddNewStudent;