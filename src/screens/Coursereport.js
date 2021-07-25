import React, { useState } from "react";
import styled from "styled-components";
import BarGraph from "../components/BarGraph";
import GroupGraph from '../components/GroupGraph'
import GraphD from "../data/cortexlink.json";
import Footer from "../components/Footer";

function Coursereport() {
  const [data] = useState(GraphD.BarGrpahData);

  return (
    <>
      <Wrapper>
        <section className="course__reports__section  my-6 px-12 pb-12 -ml-24 md:-ml-24 lg:-ml-32 xl:m-0 2xl:m-0">
          <h1 className="course__reports__heading font-semibold text-2xl">
            Course Reports
          </h1>

          <div className="my-12">
            <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-10">
              <div className="overflow-auto left__graph">
                <GroupGraph />
              </div>
                {data.map((element, index) => {
                  return (
                    <>
                    <div className="overflow-auto bar_graph">
                        <BarGraph key={element.id} {...element} />;
                    </div>
                    </>
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
  .course__reports__section {
    background: #f1f3f9;
    overflow-x:hidden;

    .course__reports__heading {
      color: #1f155e;
    }
    .bar_graph{
      border-radius:20px;
      background:#fff;
      width: 444px;
    }
    .left__graph{
      width:550px;
      border-radius:20px;
      background:#fff;
    }
    .left__graph::-webkit-scrollbar{
      width:1px !important;
    }
    .left__graph::-webkit-scrollbar-thumb{
      background:#fafafa;
      border-radius:50px;
    }
    .bar_graph::-webkit-scrollbar{
      width:1px !important;
    }
    .bar_graph::-webkit-scrollbar-thumb{
      background:#fafafa;
      border-radius:50px;
    }
    .user-select-none.svg-container {
    position: relative;
    width: 550px;
    height: 400px;
}
  }

  @media only screen and (max-width:500px){
  .left__graph{
      width:400px !important;
      border-radius:20px;
      margin-left:-20px;
    }
  .bar_graph{
      margin-left:-20px;
      width: 400px !important;
    }
}
  @media only screen and (max-width:375px){
  .left__graph{
      width:300px !important;
      border-radius:20px;
      margin-left:-20px;

    }
  .bar_graph{
      margin-left:-20px;
      width: 300px !important;
    }
}

@media screen and (max-width:425px){
    .left__graph{
      width:355px !important;
       border-radius:20px;
      margin-left:-20px;
      overflow:auto;
    }
    .bar_graph{
      margin-left:-20px;
      width: 355px !important;
    }
}

@media only screen and (max-width:320px){
  .left__graph{
      width:300px !important;
      border-radius:20px
    }
  .bar_graph{
      margin-left:-20px;
      width: 300px !important;
    }
}

`;

export default Coursereport;
