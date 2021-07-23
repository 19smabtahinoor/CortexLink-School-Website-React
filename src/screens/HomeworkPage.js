import React, { useState } from "react"
import styled from 'styled-components';
import Footer from '../components/Footer';
import HomeWorkEquaGraph from '../components/HomeworkEquaGraph';
import BubbleGraph from '../components/BubbleGraph';
import PieChart from '../components/PieChart';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StudentId from '../data/cortexlink.json';
import { Button } from '@material-ui/core';

// Make Select Option 
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        border: 1,
        borderRadius: 3,
    },
}));

function HomeworkPage() {
    const [studentIdData] = useState(StudentId.StudentID)
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
                <section className="homework__section px-12 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">
                    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  pt-12 pb-12">
                        <h1 className="homework__heading font-semibold text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl flex flex-grow">Homework</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-15">
                        <div className="overflow-auto  mb-8">
                            <BubbleGraph />
                        </div>
                        <div className="overflow-auto mb-8">
                            <HomeWorkEquaGraph />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 rounded-xl shadow-xl p-8 box-border bg-white my-12">
                        <div className="border-r border-gray-400">
                            <div className="flex items-center pr-12">
                                <h1 className="homework__heading font-semibold text-lg pb-3 md:text-lg lg:text-xl xl:text-xl 2xl:text-xl flex-grow">Performance</h1>
                                <div className="hidden md:block lg:block xl:block 2xl:block">
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
                                
                            </div>
                            <div className="overflow-auto  mb-8">
                                <BubbleGraph />
                            </div>
                        </div>

                        {/* student id information  */}
                        <div className="flex flex-col  p-6 box-border">
                            
                            <div>
                                <h1 className="homework__heading font-semibold text-lg pb-3 md:text-lg lg:text-xl xl:text-xl 2xl:text-xl pt-4">Student ID</h1>

                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 ">
                                    {studentIdData.map((element,index) => {
                                        return (
                                            <div className="" key={index}>
                                                <p className="text-gray-500 font-semibold py-4">{element.id}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* solutions */}
                            <div>
                                <h1 className="homework__heading font-semibold text-lg pb-5 md:text-lg lg:text-xl xl:text-xl 2xl:text-xl pt-4">Student ID</h1>

                                <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row space-x-6">
                                    
                                    <Button className="solution__button " >View Solution</Button>
                                    <Button className="solution__button" >View Solution</Button>
                                    
                                </div>
                            </div>
                        </div>

                    </div>

                {/* Pie Chart  */}

                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-15">
                        <div className="pie__wrapper bg-white rounded-xl shadow-xl p-6 overflow-auto  mr-6">
                            <PieChart />
                        </div>
                        <div className="pie__wrapper bg-white rounded-xl shadow-xl p-6 overflow-auto mr-6">
                            <PieChart />
                        </div>
                        <div className="pie__wrapper bg-white rounded-xl shadow-xl p-6 overflow-auto mr-6">
                            <PieChart />
                        </div>
                </div>
                    <Footer />
                </section>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.section`
.homework__section{
    background:#F1F3F9;

    .homework__heading{
        color:#1F155E;
        margin:0px;
    }
    .solution__button{
        color:#193ABA;
        text-transform: capitalize !important;
        border-radius:50px !important;
        padding:12px 36px;
        font-size:15px;
        border:1px solid #193ABA;
        font-weight:bold !important;
        margin-bottom:10px !important;
    }
    .pie__wrapper::-webkit-scrollbar{
        width:5px;
    }
    .pie__wrapper::-webkit-scrollbar-thumb{
        background:#ddd;
        border-radius:50px;
    }
}
`

export default HomeworkPage;