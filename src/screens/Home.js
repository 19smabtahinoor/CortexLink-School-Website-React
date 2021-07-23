import React, { useState } from "react"
import styled from 'styled-components';
import Footer from '../components/Footer';
import topCardsData from '../data/cortexlink.json';
import teacherlist from '../data/cortexlink.json';
import topstudentlist from '../data/cortexlink.json';
import newstudentlist from '../data/cortexlink.json';
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

// import { Button } from '@material-ui/core';
// import { NavLink } from 'react-router-dom';

function Home() {
    const [Data1] = useState(topCardsData.HomepageCardInfo)
    const [TeachersListData] = useState(teacherlist.TeachersList)
    const [StudentsListData] = useState(topstudentlist.TopStudentList)
    const [NewStudentsListData] = useState(newstudentlist.NewStudentList)

    let trace1 = {
        y: [1, 10, 3, 7, 5],
        // y: [1, 3, 2, 3, 1],
        // mode: 'lines+markers',
        name: 'linear',
        line: { shape: 'linear' },
        type: 'scatter'
    };

    let data = [trace1];

    let layout = {
        width: 250,
        height: 100,
        legend: {
            y: 0.5,
            traceorder: 'reversed',
            font: { size: 16 },
            yref: 'paper'
        }
    };
    return (
        <>
            <Wrapper>
                <section className="add__courses__section pt-9 px-12 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">
                    {/* home__page__top__cards__wrapper */}
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10">

                        {Data1.map(({ id,title, numbers, progress, progressBarColor, description}) => {
                            return(
                                <>
                                    <div className="rounded-xl bg-white shadow-xl p-8" key={id}>
                                    <h3 className="font-semibold text-gray-600 text-lg pb-1">{title}</h3>
                                    <h1 className="text-3xl text-gray-800 font-bold pb-1">{numbers}</h1>
                                        <div className="h-3 relative max-w-xl rounded-full overflow-hidden mb-1">
                                            <div className="w-full h-full bg-gray-200 absolute"></div>
                                            <div id="bar" className={`h-full bg-${progressBarColor} relative w-${progress}`}></div>
                                        </div>
                                        <span className="text-gray-400 text-sm">{description}</span>
                                </div>
                                </>
                            )
                        })}
                    </div>

                    {/* home__page__middle__cards__wrapper */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10 my-8">

                        {/* teachers list */}
                        <div className="col-span-1 rounded-xl bg-white shadow-xl p-8 ">
                            <h3 className="font-semibold text-gray-600 text-lg pb-3">Teachers List</h3>
                            {TeachersListData.map(({ id, image, name, subject}) => {
                            return(
                                <>
                                    <div className=" flex flex-row space-x-3" key={id}>
                                        <img className="w-16 h-16 rounded-full mb-3 object-cover mr-2" src={image} alt="" />
                                        <div className="flex flex-col">
                                            <h1 className="text-gray-700 font-semibold">{name}</h1>
                                            <span className="text-sm text-gray-500">{subject}</span>
                                        </div>
                                    </div>
                                </>
                            )
                            })}
                        </div>

                        {/* top student list  */}
                        <div className="col-span-2 rounded-xl bg-white shadow-xl p-8">
                            <h3 className="font-semibold text-gray-600 text-lg pb-3">Top Student List</h3>
                            
                                    {StudentsListData.map(({ id, image, name, subject }) => {
                                        return (
                                            <>
                                            <div className="grid grid-cols-3" key={id}>
                                                <div className="col-span-1">
                                                        <div className=" flex flex-row space-x-3" key={id}>
                                                            <img className="w-16 h-16 rounded-full mb-3 object-cover mr-2" src={image} alt="" />
                                                            <div className="flex-col  xl:flex 2xl:flex">
                                                                <h1 className="text-gray-700 font-semibold">{name}</h1>
                                                                <span className="text-sm text-gray-500">{subject}</span>
                                                            </div>
                                                        </div>
                                                </div>

                                                    <div className="col-span-1 ">
                                                        <PlotlyComponent className="hidden md:block lg:block xl:block 2xl:block" data={data} layout={layout}/>
                                                    </div>

                                                    <div className="col-span-1">

                                                        <div className="flex space-x-3 justify-center">
                                                            <i className="fas fa-pen bg-black text-white p-2 rounded-full w-6 h-6 flex justify-center items-center text-sm"></i>
                                                            <i className="fas fa-times bg-red-500 text-white p-2 rounded-full w-6 h-6 flex justify-center items-center text-sm"></i>
                                                        </div>

                                                    </div>
                                            </div>
                                                

                                               
                                            </>
                                        )
                                    })}
                        </div>
                    </div>


                    {/* new student list  */}
                    <div className="grid grid-cols-1">
                        <div className=" rounded-xl bg-white shadow-xl p-8">
                            <h3 className="font-semibold text-gray-600 text-lg pb-3">New Student List</h3>

                            <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 border-b border-gray-400 pb-3 mb-3">
                                <span className="text-gray-500 font-semibold hidden lg:block xl:block 2xl:block">No</span>
                                <span className="text-gray-500 font-semibold">Name</span>
                                <span className="text-gray-500 font-semibold hidden lg:block xl:block 2xl:block">Date of Admission</span>
                                <span className="text-gray-500 font-semibold flex justify-center items-center">Status</span>
                                <span className="text-gray-500 font-semibold flex justify-center items-center">Edit</span>
                            </div>

                            <div className="">
                                {NewStudentsListData.map(({ id, name, admissionDate, status, statusColor}) => {
                                    return(
                                        <>
                                            <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 py-2" key={id}>
                                                <span className="text-gray-700 font-bold text-lg hidden lg:block xl:block 2xl:block">{id}.</span>
                                                <span className="text-gray-700 font-bold text-lg">{name}</span>
                                                <span className="text-gray-700 font-bold text-lg hidden lg:block xl:block 2xl:block">{admissionDate}</span>
                                                <span className={`text-white font-semibold text-lg py-2 px-3 flex justify-center items-center rounded-full bg-${statusColor}`}>{status}</span>
                                                <div className="flex space-x-3 justify-center">
                                                    <i className="fas fa-pen bg-black text-white p-2 rounded-full w-6 h-6 flex justify-center items-center text-sm"></i>
                                                    <i className="fas fa-times bg-red-500 text-white p-2 rounded-full w-6 h-6 flex justify-center items-center text-sm"></i>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
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
`

export default Home;