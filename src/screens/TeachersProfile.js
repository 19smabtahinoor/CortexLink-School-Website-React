import React, { useState } from 'react';
import styled from "styled-components";
import Footer from "../components/Footer";
import AllTeachers from '../data/cortexlink.json';

function TeachersProfile() {
  const [teacherData] = useState(AllTeachers.AllTeachers)

  return (
    <>
      <Wrapper>
        <section className="messages__section px-12 my-6 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">
          <h1 className="messages__heading font-semibold text-2xl">
            Teacher Profile
          </h1>

          <div className="my-12 gap-10 bg-white rounded-xl p-8 box-border">

            {/* teachers info  */}

            {teacherData.map(({ id, image, name, phoneNo, address, email, about, expertise, education }) => {
              return (
                <div key={id}>
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:place-items-center lg:place-items-start border-b border-gray-400 pb-3" >
                    {/* teacher image  */}
                    <div className="col-span-1">
                      <img className="pb-3 w-full  rounded-xl" src={image} alt="teacher" />
                    </div>

                    {/* teacher name  */}
                    <div className="col-span-1">
                      <h1 className="text-2xl lg:text-3xl xl:text-3xl text-blue-900 font-bold">{name}</h1>

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

                    {/* teacher address  */}
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

                  {/* About the teacher  */}
                  <div className="grid grid-cols-1 py-3 border-b border-gray-400">
                    <h1 className="text-xl text-blue-900 font-bold">About</h1>
                    <p className="text-gray-400">{about}</p>
                  </div>

                  {/* other info  */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">

                    <div className="col-span-1">
                      <h1 className="text-xl text-blue-900 font-bold py-3">Education</h1>

                      <h3 className="text-gray-400">
                        <i className="fa fa-circle text-red-300 pr-2 text-sm"></i>
                        {education[0]}
                      </h3>

                      <h3 className="text-gray-400">
                        <i className="fa fa-circle text-red-300 pr-2 text-sm"></i>
                        {education[1]}
                      </h3>
                    </div>

                    <div className="col-span-1">
                      <h1 className="text-xl text-blue-900 font-bold py-3">Expertise</h1>
                      <span className="text-gray-400">{expertise}</span>
                    </div>
                  </div>

                </div>
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
  .messages__section {
    background: #f1f3f9;

    .messages__heading {
      color: #1f155e;
    }
  }
`;

export default TeachersProfile;