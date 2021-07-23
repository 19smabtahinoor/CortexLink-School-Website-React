import React from "react";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);

function HomeWorkEquaGraph() {
    let x = [];
    for (let i = 0; i < 500; i++) {
        x[i] = Math.random();
    }
    let data = [
        {
            x: x,
            type: 'histogram',
        }
    ];
    let layout = {
        width: 570,
        height: 400,
        title: "<b>Proficiency of students in diff.concepts</b>",
        margin: {
            l: 80,
            r: 100
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
export default HomeWorkEquaGraph;
