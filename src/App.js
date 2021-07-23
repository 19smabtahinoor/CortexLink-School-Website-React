import React from 'react';
import "./index.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coursereport from './screens/Coursereport';
import MyCourse from './screens/MyCourse';
import Home from './screens/Home';
import CourseDetails from './screens/CourseDetails';
import MessagesPage from './screens/MessagesPage';
import AddNewCourse from './screens/AddNewCourse';
import TeachersProfile from './screens/TeachersProfile';
import NotificationDetails from './screens/NotificationDetails';
import ForgotPassword from './screens/ForgotPassword';
import Login from './screens/Login';
import Signup from './screens/Signup';
import StudentsPage from './screens/StudentsPage';
import AddNewStudent from './screens/AddNewStudent';
import ParentsDashboard from './screens/ParentsDashboard';
import StudentProfile from './screens/StudentProfile';
import HomeworkPage from './screens/HomeworkPage'; 
import CourseStudentsPage from './screens/CourseStudentsPage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';

function App() {

    return (
        <BrowserRouter>
            <main className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-6">
                    <div className="col-span-1">
                        <Sidebar />
                    </div>

                    <div className="col-span-5">
                        <Navbar />
                        <Switch>
                            <Route exact path="/">
                                {<Home />}
                            </Route>
                            <Route exact path="/course-reports">
                                {<Coursereport />}
                            </Route>
                            <Route exact path="/mycourses">
                                {<MyCourse />}
                            </Route>
                            <Route exact path="/messages">
                                {<MessagesPage />}
                            </Route>
                            <Route exact path="/add-new-course">
                                {<AddNewCourse />}
                            </Route>
                            <Route exact path="/teachers">
                                {<><h1>Teachers List</h1></>}
                            </Route>
                            <Route exact path="/notifications">
                                {<NotificationDetails />}
                            </Route>
                            <Route exact path="/signup">
                                {<Signup />}
                            </Route>
                            <Route exact path="/login">
                                {<Login />}
                            </Route>
                            <Route exact path="/forgot-password">
                                {<ForgotPassword />}
                            </Route>
                            <Route exact path="/students">
                                {<StudentsPage />}
                            </Route>
                            <Route exact path="/add-new-student">
                                {<AddNewStudent />}
                            </Route>
                            <Route exact path="/parents-dashboard">
                                {<ParentsDashboard />}
                            </Route>
                            <Route exact path="/student-profile">
                                {<StudentProfile />}
                            </Route>
                            <Route exact path="/homework">
                                {<HomeworkPage />}
                            </Route>
                            <Route exact path="/enrolled-students">
                                {<CourseStudentsPage />}
                            </Route>
                            <Route exact path="/coursedetails/:id" children={<CourseDetails />}></Route>
                            <Route exact path="/teachers/teacher-profile/:id" children={<TeachersProfile />}></Route>
                            <Route exact path="/students/student-profile/:id" children={<StudentProfile />}></Route>
                            <Route exact path="*">{<ErrorPage/>}</Route>
                        </Switch>
                    </div>
                </div>
            </main>
        </BrowserRouter>
    )
}

export default App