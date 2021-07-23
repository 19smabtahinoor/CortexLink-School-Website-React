import React, { useState } from 'react';
import styled from "styled-components";
import Footer from "../components/Footer";
import AllNotifications from '../data/cortexlink.json';


function NotificationDetails() {
    const [notificationData] = useState(AllNotifications.AllNotifications)

    return (
        <>
            <Wrapper>
                <section className="messages__section px-12 my-6 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">
                    <h1 className="messages__heading font-bold text-2xl">
                        Notifications
                    </h1>

                    <div className="my-12 bg-white rounded-xl p-8 box-border grid grid-cols-1 gap-y-10">

                        <div className="col-span-1">
                            <h1 className="messages__heading font-semibold text-xl pb-4">
                                Today
                            </h1>
                            {notificationData.map(({ id, time, notificationText, name, subject }) => {
                                return (
                                    <div className="flex space-x-3">
                                        <div className="flex flex-col">
                                            <i className="fa fa-circle text-red-300 pr-2 text-sm"></i>
                                            <span className="flex ml-1 h-16 w-1 bg-red-300 rounded-full"></span>
                                        </div>
                                        <div className="flex flex-col space-y-1 mb-4" key={id}>
                                            <span className="text-gray-300 text-sm">{time}</span>
                                            <h3 className="text-lg text-gray-700"><span className="font-bold">{name}</span>  {notificationText} <span className="text-red-300 font-bold">{subject}</span></h3>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>


                        <div className="col-span-1">
                            <h1 className="messages__heading font-semibold text-xl pb-4">
                                Yesterday
                            </h1>

                            {notificationData.map(({ id, time, notificationText, name, subject }) => {
                                return (
                                    <div className="flex space-x-3">
                                        <div className="flex flex-col">
                                            <i className="fa fa-circle text-red-300 pr-2 text-sm"></i>
                                            <span className="flex ml-1 h-16 w-1 bg-red-300 rounded-full"></span>
                                        </div>
                                        <div className="flex flex-col space-y-1 mb-4" key={id}>
                                            <span className="text-gray-300 text-sm">{time}</span>
                                            <h3 className="text-lg text-gray-700"><span className="font-bold">{name}</span>  {notificationText} <span className="text-red-300 font-bold">{subject}</span></h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

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

export default NotificationDetails;