import React from "react";
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';
const PlotlyComponent = createPlotlyComponent(Plotly);


function BubbleGraph() {
    let trace1 = {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [10, 7, 12, 20, 15, 2, 5, 16, 10, 18],
        mode: 'markers',
        marker: {
            color: [
                'rgb(93, 164, 214)',
                'rgb(255, 144, 14)',
                'rgb(44, 160, 101)',
                'rgb(255, 65, 54)',
                'rgb(93, 164, 214)',
                'rgb(255, 144, 14)',
                'rgb(255, 65, 54)',
                'rgb(255, 65, 44)',
                'rgb(255, 144, 14)',
                'rgb(93, 164, 214)',
            ],
            opacity: [1, 0.8, 0.6, 0.4],
            size: [20, 40, 60, 80, 30, 10, 40, 20, 15, 35]
        }
    };
    let data = [trace1];
    let layout = {
        width: 450,
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
        hovermode: "closest",
        showlegend: false
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
export default BubbleGraph;
