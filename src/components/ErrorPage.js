import React from 'react';
import styled from "styled-components";
import Footer from "../components/Footer";
import { NavLink } from 'react-router-dom';

function ErrorPage() {
    return (
        <>

            <Wrapper>
                <section className="error__section px-12 my-6 pb-12 -ml-20 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">

                    <div className="error__image">
                        <img src="../../assets/404.png" alt="error" />
                        <NavLink to="/" className="bg-blue-800 rounded-full px-3 py-2 text-white">Back to home</NavLink>
                    </div>
                    <Footer />
                </section>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.section`
    .error__section {
        background: #f1f3f9;

        .error__image {
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items:center;
            img{
                width:400px;
                object-fit: contain;
            }
        }
    }
    `;


export default ErrorPage;