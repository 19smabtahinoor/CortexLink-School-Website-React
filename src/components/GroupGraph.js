import React from "react";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

function GroupGraph({ barColor, xaxis, yaxis }) {
  let data = [
    {
      x: [
        "Clusion",
        "Newton",
        "Einestain",
        "Novince",
        "Intermediate",
        "Expert"
      ],
      y: [10, 20, 45, 30, 60, 3],
      type: "filter",
      width: 0.5,
      marker: { color: "#52s456" }
    }
  ];
  let layout = {
    width: 500,
    height: 400,
    title: "<b>Overall class proficiency in Fraction</b>",
    margin: {
      l: 120,
      r: 120
      // b: 100,
      // t: 100,
      // pad: 4
    },
    paper_bgcolor: "white",
    plot_bgcolor: "white",
    barmode: "stack",
    //   bargroupgap: 30,
    font: {
      family: "Poppins , sans-serif",
      size: 12,
      color: "#1e145e"
    },
    xaxis: {
      title: "<b>PROFICIENCY LEVEL</b>",
      titlefont: {
        family: "Poppins , sans-serif",
        size: 15,
        color: "#1e145e"
      },
      showticklabels: true,
      tickfont: {
        family: "Arial",
        size: 14,
        color: "#6b6b6b"
      }
    },
    yaxis: {
      title: "<b>NUMBER OF STUDENTS</b>",
      titlefont: {
        family: "Poppins , sans-serif",
        size: 15,
        color: "#1e145e"
      },
      showticklabels: true,
      tickfont: {
        family: "Poppins , sans-serif",
        size: 14,
        color: "#6b6b6b"
      }
    },
    cornerroundness: {
      bottomleft: 10.3,
      bottomright: 0,
      topleft: 20,
      topright: 0
    },
    hovermode: "closest"
  };
  let config = {
    showLink: false,
    displayModeBar: true,
    responsive: true
  };
  return (
    <>
      <PlotlyComponent data={data} layout={layout} config={config} />
    </>
  );
}
export default GroupGraph;
