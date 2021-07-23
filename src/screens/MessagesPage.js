import React, { useState } from 'react';
import styled from "styled-components";
import Footer from "../components/Footer";
import ChatPeoplesData from '../data/cortexlink.json';
import Messages from '../components/Messages';

function MessagesPage() {

  const [peoples] = useState(ChatPeoplesData.ChatPeoples)
  return (
    <>
      <Wrapper>
        <section className="messages__section px-12 my-6 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">
          <h1 className="messages__heading font-semibold text-2xl">
            Messages
          </h1>

          <div className="my-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-10">
            <div className="chat__contacts col-span-1 bg-white rounded-xl p-5 box-border">
              <h3 className="text-lg text-blue-700 font-bold py-4">All Messages</h3>
              <div className="chat__all__peoples flex flex-row xl:flex-col lg:flex-col 2xl:flex-col h-66 xl:h-5/6 2xl:h-5/6 overflow-scroll">
                {peoples.map((people, index) => {
                  return (
                    <>
                      <div className="chat__people flex flex-row space-x-3" key={index}>
                        <img className="w-16 h-16 rounded-full mb-3 object-cover mr-2" src={people.image} alt="" />
                        <div className="flex-col hidden xl:flex 2xl:flex">
                          <h1 className="text-gray-700 font-semibold">{people.name}</h1>
                          <span className="text-sm text-gray-500">{people.subject}</span>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>

            <div className="chat__area lg:col-span-3 xl:col-span-3 2xl:col-span-3 bg-white rounded-xl p-5 box-border">
              <Messages />
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

    .chat__all__peoples{
    /* height: 66vh; */
    /* overflow-y: auto;
    overflow-x:scroll; */
    }
    .chat__all__peoples::-webkit-scrollbar{
        width:5px;
    }
    .chat__all__peoples::-webkit-scrollbar-thumb{
            background:#ddd;
            border-radius: 50px;
            -webkit-border-radius: 50px;
            -moz-border-radius: 50px;
            -ms-border-radius: 50px;
            -o-border-radius: 50px;
    }
  }
`;

export default MessagesPage;