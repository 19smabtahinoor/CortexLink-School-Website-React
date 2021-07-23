import React, { useState } from 'react';
import ChatPeoplesData from '../data/cortexlink.json';
import styled from "styled-components";
import { Button } from '@material-ui/core';

function Messages() {
    const [peoples] = useState(ChatPeoplesData.ChatPeoples)
    const [chatMessage, setChatMessage] = useState('')
    const [submitMessage, setSubmitMessage] = useState([])
    const handleMessage = (event) => {
        event.preventDefault()
        const updateMessage = [...submitMessage, chatMessage]
        setSubmitMessage(updateMessage)
        setChatMessage('')
    }
    return (
        <Wrapper>
            <div className="chat__area__wrapper grid grid-row-4">

                {/* chat area heading  */}
                <div className="flex items-center border-b border-gray-300 row-span-1">
                    <img className="chat__person__img w-16 h-16 items-center rounded-full mb-3 object-cover" src={peoples[4].image} alt="Chat Person" />

                    <div className="chat__person__info flex flex-col flex-grow pl-3 ">
                        <h3 className="text-gray-700 font-semibold text-lg">{peoples[4].name}</h3>
                        <span className="text-sm text-gray-500"><i className="fa fa-circle text-green-300 pr-2"></i>Onilne</span>
                    </div>

                    <div className="chat__call flex space-x-3">
                        <i className="fas fa-phone text-yellow-600 bg-yellow-100 p-3 w-12 h-12 flex justify-center items-center rounded-full cursor-pointer"></i>
                        <i className="fas fa-video text-yellow-600 bg-yellow-100 p-3 w-12 h-12 flex justify-center items-center rounded-full cursor-pointer"></i>
                    </div>
                </div>

                {/* chat area  */}
                <div className="main__chat__area row-span-2 h-5/6">
                    {submitMessage.map((item, index) => {
                        return (
                            <>
                                <div className="flex items-center space-x-2 my-2" key={index}>
                                    <img className="w-10 h-10 items-center rounded-full mb-3 object-cover" src={peoples[0].image} alt="Chat Person" />

                                    <div className="flex items-center bg-yellow-100 p-3 rounded-lg">
                                        <span className="break-all">{item}</span>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>

                {/* input boxes  */}
                <div className="chat__input row-span-1 border-t border-gray-300">
                    <form action="" onSubmit={handleMessage} className="flex items-center py-4">
                        <input type="text" placeholder="Type a message" value={chatMessage} onChange={(event) => setChatMessage(event.target.value)} className="flex flex-grow border-0 outline-none text-lg " />
                        <label htmlFor="myfile" className="attach__file"><i className="fa fa-paperclip text-gray-600  p-3 w-12 h-12 flex justify-center items-center rounded-full cursor-pointer"></i></label>
                        <input className="hidden" type="file" id="myfile" name="myfile" />
                        <Button className="submit_btn" disabled={!chatMessage} type="submit"><i className="fa fa-paper-plane text-yellow-600 bg-yellow-100 p-3 w-12 h-12 flex justify-center items-center rounded-full cursor-pointer"></i>
                        </Button>
                    </form>



                </div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.main__chat__area {
    height: 63vh;
    overflow-y:scroll;
    overflow-x:hidden;
}
.main__chat__area::-webkit-scrollbar{
        width:5px;
}
.main__chat__area::-webkit-scrollbar-thumb{
        background:#ddd;
        border-radius: 50px;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        -ms-border-radius: 50px;
        -o-border-radius: 50px;
}


@media screen and (max-width:375px){
    .chat__call i{
        font-size:14px !important;
        padding:4px !important;
    }

    .details__card {
        width: 320px;
    }
    .chat__person__img{
        margin-right:32%;
    }
    .chat__person__info {
        display: none;
    }

    .chat__area__wrapper {
        width: 256px;
        overflow: hidden;
    }
    .submit_btn{
        margin-left:-46px;
    }
    .attach__file{
        display:none;
    }
}


@media screen and (max-width:425px){
    .chat__call i{
        font-size:14px !important;
        padding:4px !important;
    }

    .details__card {
        width: 320px;
    }
    .chat__person__img{
        /* margin-right:40%; */
    }
    .chat__person__info {
        display: block;
    }

    .chat__area__wrapper {
        width: 300px;
        overflow: hidden;
    }
    .submit_btn{
        margin-left:-46px;
    }
    .attach__file{
        display:none;
    }
}

`;

export default Messages




