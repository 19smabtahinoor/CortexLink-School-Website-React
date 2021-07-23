import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import courseData from '../data/cortexlink.json';
import styled from 'styled-components';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { FaBook } from "react-icons/fa";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";

function CourseDetails() {
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [studentsNumber, setstudentsNumber] = useState("");
    const [description, setdescription] = useState("");
    const [like, setLike] = useState(<HiOutlineHeart className="w-6 h-6 text-gray-500" />)


    const { id } = useParams()
    useEffect(() => {
        const newCourse = courseData.myCourse.find((courseItem) => courseItem.id === parseInt(id))
        setImage(newCourse.image);
        setTitle(newCourse.title);
        setTime(newCourse.time);
        setstudentsNumber(newCourse.studentsNumber);
        setdescription(newCourse.description);
    }, [id]);

    return (
        <>
            <Wrapper>
                <section className="my__courses__section px-12 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">
                    <div className="flex pt-12">
                        <h1 className="my__courses__heading font-semibold text-2xl flex flex-grow pb-9">Course Detail</h1>
                    </div>

                    <div className="details__card grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 bg-white rounded-xl shadow-lg box-border p-8">

                        {/* left Side start  */}
                        <div className="col-span-1">
                            <div className="course__details__image__wrapper rounded-xl mb-8">
                                <img className="mobile__responsive__Image rounded-xl" src={image} alt={title} />
                            </div>

                            <NavLink to="/course-reports">
                                <Button className="course__reports__button py-4">Check Report</Button>
                            </NavLink>

                            <div className=" flex flex-row items-center mt-4" style={{ marginTop: "10%" }}>
                                <div className="flex flex-grow">
                                    <img className="w-8 h-8 rounded-full" src="../../assets/student1.jpg" alt="" />
                                    <img className="w-8 h-8 rounded-full" src="../../assets/student2.jpg" alt="" />
                                    <img className="w-8 h-8 rounded-full" src="../../assets/student3.jpg" alt="" />
                                    <img className="w-8 h-8 rounded-full" src="../../assets/student1.jpg" alt="" />
                                </div>

                                <h3 className="my__courses__students__number text-lg pr-8 hidden md:block lg:block xl:block 2xl:block">{studentsNumber}</h3>
                            </div>

                            <Button className="course__assignments__button" startIcon={<FaBook className="text-white" />}>Assignements</Button>
                        </div>
                        {/* left Side  end*/}

                        {/* Right Side Start */}

                        <div className="col-span-2">
                            <div className=" flex flex-row py-3">
                                <h1 className="flex flex-grow text-gray-500 font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl">{title}</h1>
                                <span onClick={() => { setLike(<HiHeart className="w-6 h-6 text-red-500" />) }}>{like}</span>
                            </div>

                            <span className="text-gray-400 text-base my-9">{time}</span>

                            <h3 className="my-4 text-gray-700 text-lg font-bold hidden md:block lg:block xl:block 2xl:block">Topics Inside This Course</h3>
                            <div className=" space-x-4 hidden md:flex lg:flex xl:flex 2xl:flex">
                                <Button className="topic__button">Algebra</Button>
                                <Button className="topic__button">Arithmetic</Button>
                                <Button className="topic__button">Geometry</Button>
                            </div>

                            <div className="py-9">
                                <h2 className="my-4 text-gray-700 text-lg font-bold">About Course</h2>

                                <p className="text-gray-500 text-lg text-justify">{description}</p>
                            </div>
                        </div>
                        {/* Right Side End */}


                    </div>

                    <Footer />
                </section>
            </Wrapper>

        </>
    );
}

const Wrapper = styled.section`
.course__reports__button{
    color:#fff;
    text-transform: capitalize !important;
    border-radius:50px !important;
    padding:12px 25px;
    font-size:13px;
    transition: 0.3s;
    background:#193ABA;
    font-weight:bold !important;
}
.my__courses__heading{
        color:#1F155E;
}
.course__reports__button:hover{
    background:#fff;
    color:#193ABA;
}
.my__courses__students__number{
    color:#fb7d5b;

}

.course__assignments__button{
    background:linear-gradient(45deg, lightsalmon, tomato);
    color:#fff;
    text-transform: capitalize !important;
    border-radius:50px !important;
    padding:12px 30px;
    font-size:13px;
    transition: 0.3s;
    font-weight:bold !important;
    margin-top: 10%;
}
.course__assignments__button:hover{
    background:linear-gradient(45deg, tomato,lightsalmon);

}

.course__details__image__wrapper{
    width:340px;
    height:250px;
    overflow:hidden;
}
.course__details__image__wrapper img{
    width:100%;
    height:100%;
    object-fit:cover;
}

.topic__button{
    border:1px solid #193ABA;
    color:#193ABA;
    text-transform: capitalize !important;
    border-radius:50px !important;
    padding:10px 28px;
    font-size:15px;
    transition: 0.3s;
}
.topic__button:hover{
    background:#193ABA;
    color:#fff;
}

@media only screen and (max-width:375px){
    .course__details__image__wrapper img{
            width: 72% !important;
    }
      .details__card{
        width: 315px;
        margin-left: 6px;
    }
}

@media screen and (max-width:425px){
    .course__details__image__wrapper img{
        width:80%;
    }
}

@media only screen and (max-width:320px){
    .course__details__image__wrapper img{
        width:72% !important;
    }
    .details__card{
        width: 310px;
        margin-left: 16px;
    } 
}

`

export default CourseDetails;