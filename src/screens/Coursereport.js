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
              <div className="overflow-auto">
                <GroupGraph />
              </div>
                {data.map((element, index) => {
                  return (
                    <>
                    <div className="overflow-auto">
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
  }
`;

export default Coursereport;
