import React, { useState } from "react";
import styled from 'styled-components';
import Footer from '../components/Footer';
import currentCourseData from '../data/cortexlink.json';
import upCommingLessonData from '../data/cortexlink.json';
import commingCoursesData from '../data/cortexlink.json';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import BarGraph from '../components/BarGraph';
import GraphD from "../data/cortexlink.json";
import Calendar from 'react-calendar'
import ParentDashboardGraph from '../components/ParentDashboardGraph'
import { NavLink } from 'react-router-dom'

// Make Select Option 
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        border: 1,
        borderRadius: 3,
    },
}));


function ParentsDashboard() {
    const [courseData] = useState(currentCourseData.currentCoursesList)
    const [upCommingData] = useState(upCommingLessonData.UpcomingLessons)
    const [commingCourse] = useState(commingCoursesData.UpcommingCourses)
    const [data] = useState(GraphD.PerformenceGraphData);

    // Select Course 
    const classes = useStyles();
    const [selectCourse, setselectCourse] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setselectCourse(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };


    return (
        <>
            <Wrapper>
                <section className="parents__dashboard__section px-12 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">

                    {/* Banner Section  */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-10 py-8">
                        <div className="col-span-2 rounded-xl shadow-xl p-6 box-border bg-purple-300">
                            <div className="flex flex-col items-center md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  justify-between">
                                <div className="py-4 pl-4">
                                    <h1 className="text-white text-3xl">Welcome back, <span className="font-semibold"> Justin!</span></h1>
                                    <p className="text-white">Your child completed <span className="text-indigo-900 font-bold">80%</span> of the tasks.</p>
                                    <h4 className="text-white pt-10">Progress is <span className="text-indigo-900 font-bold">Very Good!</span></h4>
                                </div>

                                <div>
                                    <img className="w-64 h-40 object-contain" src="../../assets/Path.png" alt="parent home page" />
                                </div>
                            </div>

                        </div>

                        <div className="col-span-1">
                            <div className="bg-white rounded-xl shadow-xl p-6 box-border">
                                <Calendar />
                            </div>
                        </div>
                    </div>

                    {/* Current Running Courses Section  */}
                    <div>
                        <h1 className="current__courses__heading font-semibold text-lg pb-3 md:text-lg lg:text-xl xl:text-xl 2xl:text-xl">Current Running Courses</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-5">
                            {courseData.map((element) => {
                                return (
                                    <>
                                        <div className="bg-white rounded-xl shadow-xl p-6" key={element.id}>
                                            <h3 className={`text-white mb-2 text-center rounded-sm py-1 font-bold bg-${element.subjectsColor}`}>{element.subject}</h3>
                                            <p className="text-gray-500 font-semibold pb-3 text-lg">{element.title}</p>
                                            <span className="text-red-400 text-sm">{element.time}</span>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>


                    {/* Upcoming Lessons, Courses Performance Section */}

                    <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-10 my-12">

                        {/* Upcomming Lessons  */}
                        <div className="col-span-1">
                            <h1 className="current__courses__heading font-semibold text-lg pb-12 md:text-lg lg:text-xl xl:text-xl 2xl:text-xl">Upcomming Lessons</h1>
                            {upCommingData.map((element) => {
                                return (
                                    <>
                                        <div className={`bg-white rounded-xl shadow-xl p-6 border-t-4 border-${element.cardColor} mb-4`} key={element.id}>
                                            <h1 className="text-gray-800 text-lg font-semibold">
                                                {element.title}
                                            </h1>
                                            <p className="text-gray-400">{element.time}</p>

                                            <div className="flex items-center space-x-2">
                                                <div className="flex flex-grow">
                                                    {element.students.map((image) => {
                                                        return (
                                                            <>
                                                                <img className="w-9 h-9 rounded-full object-cover mr-2 my-2" src={image} alt="students" />
                                                            </>
                                                        )
                                                    })}
                                                </div>

                                                <p><i className="fa fa-plus text-white bg-red-300 rounded-full w-9 h-9 p-1 flex justify-center items-center"></i></p>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>

                        {/* Coursers  */}
                        <div className="col-span-2">
                            <h1 className="current__courses__heading font-semibold text-lg pb-12 md:text-lg lg:text-xl xl:text-xl 2xl:text-xl">Courses</h1>

                            <div>
                                {commingCourse.map((element) => {
                                    return (
                                        <>
                                            <div className="flex flex-col mb-3" key={element.id}>
                                                <div className="bg-white rounded-xl shadow-xl p-6 box-border flex items-center space-x-3">

                                                    <img className="w-12 h-12 rounded-full object-cover" src={element.image} alt="" />

                                                    <div className="flex flex-col flex-grow">
                                                        <h3 className="text-gray-800 text-lg font-semibold">
                                                            {element.title}
                                                        </h3>
                                                        <p className="text-gray-500">{element.description}</p>
                                                    </div>

                                                    <i className="fas fa-arrow-right text-xl"></i>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                            <div className="mt-5 flex justify-center">
                                <NavLink className="w-full rounded-lg py-3 px-4 text-white bg-blue-800 flex justify-center" to="/mycourses">View all courses</NavLink>
                            </div>
                            

                        </div>

                        {/* Performance Graph  */}
                        <div className="col-span-2">
                            <div className="flex">
                                <h1 className="current__courses__heading font-semibold text-lg pb-3 md:text-lg lg:text-xl xl:text-xl 2xl:text-xl flex-grow">Performance</h1>
                                <FormControl className={classes.formControl} variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">Select Course</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={selectCourse}
                                        onChange={handleChange}
                                        label="Select Course"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Mathmetics</MenuItem>
                                        <MenuItem value={20}>Science</MenuItem>
                                        <MenuItem value={30}>Computer</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>



                            <div className="rounded-xl shadow-xl overflow-auto">
                                {data.map((element, index) => {
                                    return <BarGraph key={element.id} {...element} />;
                                })}
                            </div>
                        </div>

                    </div>


                    {/* Parent Dashboard Graph  */}
                    <div className="grid grid-cols-1 place-items-center overflow-auto">
                        <div className="rounded-xl shadow-xl overflow-auto">
                            <ParentDashboardGraph />
                        </div>
                    </div>

                    <Footer />
                </section>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.section`
.parents__dashboard__section{
    background:#F1F3F9;
    .current__courses__heading{
        color:#1F155E;
        margin:0px;
    }
}
`

export default ParentsDashboard;
