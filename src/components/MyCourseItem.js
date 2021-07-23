import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import { HiAcademicCap } from "react-icons/hi";
import { NavLink } from 'react-router-dom';


import styled from 'styled-components';

function MyCourseItem({ image, title, time, studentsNumber, category }) {

    const [like, setLike] = useState(<HiOutlineHeart className="w-6 h-6 text-gray-500" />)

    return (
        <Wrapper>
            <div className="course__card bg-white rounded-xl shadow-lg box-border p-4">
                <div className="my__courses__image__wrapper rounded-xl cursor-pointer">
                    <img className="transition duration-700 ease-in-out transform w-full object-contain hover:scale-125" src={image} alt={title} height="150px" />
                </div>

                <div className="">
                    <div className=" flex flex-row pt-4">
                        <h1 className="course__card__title flex flex-grow text-gray-500 font-semibold text-lg">{title}</h1>

                        <span onClick={() => { setLike(<HiHeart className="w-6 h-6 text-red-500" />) }}>{like}</span>

                    </div>
                    <span className="text-gray-400 text-base course__card__time">{time}</span>

                    <div className="flex flex-row items-center py-3">
                        <h3 className="flex flex-grow my__courses__students__number text-lg "><HiAcademicCap className="w-6 h-6 mr-2 mt-1" />{studentsNumber}</h3>
                        <NavLink to="/course-reports">
                            <Button className="course__reports__button">Check Report</Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}


const Wrapper = styled.section`
.my__courses__image__wrapper{
    height:150px;
    overflow:hidden;
}
.my__courses__students__number{
    color:#fb7d5b;
}
.course__reports__button{
    border:1px solid #193ABA;
    color:#193ABA;
    text-transform: capitalize !important;
    border-radius:50px !important;
    padding:6px 15px;
    font-size:13px;
    transition: 0.3s;
}
.course__reports__button:hover{
    background:#193ABA;
    color:#fff;
}

@media screen and (max-width:320px){
    .course__card{
        width:280px;
    }

    .course__card__title{
        font-size:16px;
    }

    .course__card__time{
        font-size:14px;
    }
}
`
export default MyCourseItem;