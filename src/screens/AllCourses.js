import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import courseData from '../data/cortexlink.json';
import MyCourseItem from '../components/MyCourseItem'
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

function AllCourses() {

    const [data, setData] = useState(courseData.myCourse)

    const filterCourse = (category) => {
        const filtering = courseData.myCourse.filter((courseItem) => {
            return courseItem.category === category
        })

        setData(filtering)
    }

    return (
        <>
            <Wrapper>
                <section className="my__courses__section px-12 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  pt-12 pb-12">
                        <h1 className="my__courses__heading font-semibold text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl flex flex-grow pb-4">All Courses</h1>
                    </div>

                    <div className="">
                        <Button className="my__courses__catergory__tabs md:mb-2" onClick={() => { setData(courseData.myCourse) }}>All Lesson</Button>
                        <Button className="my__courses__catergory__tabs md:mb-2" onClick={() => { filterCourse("Fraction") }}>Fraction</Button>
                        <Button className="my__courses__catergory__tabs md:mb-2" onClick={() => { filterCourse("Counting") }}>Counting</Button>
                        <Button className="my__courses__catergory__tabs md:mb-2" onClick={() => { filterCourse("Algebra") }}>Algebra</Button>
                        <Button className="my__courses__catergory__tabs md:mb-2" onClick={() => { filterCourse("Arithmetic") }}>Arithmetic</Button>
                        <Button className="my__courses__catergory__tabs md:mb-2" onClick={() => { filterCourse("Trigonometic") }}>Trigonometic</Button>
                    </div>



                    {/* my course  */}

                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-10 pt-12">
                        {data.map((courseitem, index) => {
                            return (
                                <NavLink to={`/coursedetails/${courseitem.id}`}>
                                    <MyCourseItem
                                        key={index}
                                        {...courseitem}
                                    />
                                </NavLink>
                            )
                        })}
                    </div>

                    <Footer />
                </section>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.section`
.my__courses__section{
    background:#F1F3F9;

    .my__courses__heading{
        color:#1F155E;
    }

    .new__course__button{
        background:#193ABA;
        color:white;
        text-transform: capitalize !important;
        border-radius:50px !important;
        padding:12px 24px;
        font-weight: bold;
        font-size:15px;
    }

    .my__courses__catergory__tabs{
        padding:10px 28px;
        background:#F1F3F9;
        color:#1F155E;
        font-size:15px; 
        text-transform: capitalize !important;
        font-weight:500;
        border:2px solid #ddd;
        margin:5px 5px;
;
    }
    .my__courses__catergory__tabs:focus{
        background:#ffffff;
        color:#193ABA;
        border-bottom:2px solid #193ABA;
    }
    .MuiDataGrid-window::-webkit-scrollbar {
        display: none;
    }
}

`

export default AllCourses;